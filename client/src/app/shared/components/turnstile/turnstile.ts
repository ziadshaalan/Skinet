import { AfterViewInit, Component, ElementRef, inject, NgZone, OnDestroy, output, viewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';

// #region Why a component not a script
// WHY A COMPONENT INSTEAD OF A SCRIPT TAG: the Turnstile script has to be
// loaded, the widget has to be rendered into a specific element and the token
// has to be handed back to Angular. Wrapping that in a component keeps the
// rest of the app free of it - the auth form only sees a <app-turnstile> that
// emits a token.
//
// HOW IT WORKS:
//   1. ngAfterViewInit loads the Turnstile script (only once per page, see
//      loadTurnstile below).
//   2. window.turnstile.render() draws the widget inside our container.
//   3. Cloudflare calls the callback with a token when the challenge is solved.
//      We pass that token to the parent through the "token" output.
//   4. The parent sends the token to the API, which asks Cloudflare whether it
//      is genuine. The browser's token alone proves nothing.
//
// ZONE: the callback runs OUTSIDE Angular's zone (it is a plain JS callback),
// so without NgZone.run() the change detection would not notice the new token
// and the "Create account" button would stay disabled forever.
// #endregion
/** Cloudflare Turnstile widget (the "are you human?" checkbox). */
declare global {
  interface Window { turnstile?: any }
}

// #region Loading the script once
// The promise is kept in a module level variable so that a second component
// (or a second visit to the register screen) does not download the script
// again. If the load fails the variable is reset, so the next attempt can try
// again instead of being stuck with a rejected promise forever.
// #endregion
/** The script is only loaded once and then reused. */
let scriptPromise: Promise<void> | null = null

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      scriptPromise = null   // allow a retry after a failed load
      reject(new Error('Turnstile failed to load'))
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

@Component({
  selector: 'app-turnstile',
  template: '<div #container></div>',
})
export class Turnstile implements AfterViewInit, OnDestroy {
  /** The token, or null while the challenge is unsolved / expired. */
  token = output<string | null>()

  private zone = inject(NgZone)
  private container = viewChild.required<ElementRef<HTMLDivElement>>('container')
  private widgetId?: string
  private destroyed = false

  async ngAfterViewInit() {
    try {
      await loadTurnstile()
    } catch {
      return   // script failed to load: no token, so the submit button stays disabled
    }
    if (this.destroyed) return   // component was removed while the script was loading

    this.widgetId = window.turnstile.render(this.container().nativeElement, {
      sitekey: environment.turnstileSiteKey,
      callback: (token: string) => this.zone.run(() => this.token.emit(token)),
      'expired-callback': () => this.zone.run(() => this.token.emit(null)),
      'error-callback': () => this.zone.run(() => this.token.emit(null)),
    })
  }

  // #region Why the token is thrown away
  // Needed after a failed registration: a Turnstile token can only be used
  // once, so the old one would be rejected by the server.
  // #endregion
  /** Throws the current token away and draws a new challenge. */
  reset() {
    if (this.widgetId) {
      window.turnstile.reset(this.widgetId)
      this.token.emit(null)
    }
  }

  /** Removes the widget when the component disappears. */
  ngOnDestroy() {
    this.destroyed = true
    if (this.widgetId) window.turnstile?.remove(this.widgetId)
  }
}
