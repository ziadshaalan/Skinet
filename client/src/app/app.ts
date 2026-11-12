import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from "./layout/header/header";
import { MiniCart } from './shared/components/mini-cart/mini-cart';


// #region The app shell (this component)
// This is the frame that wraps EVERY page:
//
//   <app-header>          the fixed navigation bar
//   <router-outlet>       the page the current URL points at
//   <app-mini-cart>       the slide-in basket, kept here so it exists on every route
//
// The account page is the one exception: it is a full-screen, immersive screen
// with its own background photo, so the fixed header is hidden there and the
// page is allowed to own the whole viewport. isAuthPage() is the switch that
// tells the template which layout to use.
// #endregion

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MiniCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  // protected readonly title = signal('client');
  title = 'Skinet'

  private router = inject(Router)

  // false = normal shop layout (header + centered container)
  // true  = full-screen account layout (no header, page fills the viewport)
  readonly isAuthPage = signal(false)

  constructor() {
    // Read the URL once for the first paint, then again after every navigation.
    // NavigationEnd fires AFTER Angular has settled on the final URL, so
    // /account (which redirects) is seen as /account/login here.
    this.syncLayout(this.router.url)

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => this.syncLayout(event.urlAfterRedirects))
  }

  /** Decides whether the current URL uses the full-screen account layout. */
  private syncLayout(url: string) {
    // Strip ?query=... and a trailing slash so /account/login/ matches too.
    const path = url.split('?')[0].replace(/\/+$/, '') || '/'

    this.isAuthPage.set(
      path === '/account' ||
      path === '/account/login' ||
      path === '/account/register'
    )
  }
}
