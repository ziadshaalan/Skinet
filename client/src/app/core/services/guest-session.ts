import { computed, inject, Injectable, signal } from '@angular/core';
import { AccountService } from './account-service';

// ===== GuestSession: remembers the guest's email for this browser tab (no account, nothing saved on the server here) =====
@Injectable({
  providedIn: 'root',
})
export class GuestSession {
  private accountService = inject(AccountService)
  private readonly key = 'guest_email'

  // Raw stored email; a signal so guards and components react when it changes
  email = signal<string | null>(this.read())

  // The email to send to the API: null when signed in, because a signed-in user is never a guest
  activeEmail = computed(() => this.accountService.currentUser() ? null : this.email())

  // True only for an anonymous visitor who already gave an email
  isGuest = computed(() => this.activeEmail() !== null)

  // Keep it in memory and in sessionStorage (survives a refresh, dies with the tab)
  set(email: string) {
    this.email.set(email)
    try { sessionStorage.setItem(this.key, email) } catch { }
  }

  // Forget the guest, e.g. after signing in or after the success page closes
  clear() {
    this.email.set(null)
    try { sessionStorage.removeItem(this.key) } catch { }
  }

  // Storage can be blocked by the browser, so every access is wrapped
  private read(): string | null {
    try { return sessionStorage.getItem(this.key) } catch { return null }
  }
}