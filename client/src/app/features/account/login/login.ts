import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../core/services/account-service';
import { AuthForm } from '../../../shared/components/auth-form/auth-form';

// #region One form for both flows
// This page used to hold its own login form (email + password) and there was a
// second, almost identical page for registering. Both are gone:
//
//   - the register route now redirects here, because the new form creates the
//     account when the email is not known yet (the "email-first" flow);
//   - the form itself lives in shared/components/auth-form, so it can be reused
//     (for example in a checkout popup) without copying the code.
//
// WHAT IS LEFT FOR THE PAGE: deciding where the user goes after signing in.
// The form only knows HOW to sign in, not WHERE the user wanted to go.
// #endregion
// #region Notes on the template
// "mt-32" removed: app.html already offsets for the fixed header. "p-8" (32px)
// each side left very little room on a 375px screen, so scale the padding down on
// phones.
//
// The card only provides the frame - the form itself is the shared
// <app-auth-form>, which also decides whether the user signs in or registers.
//
// WHY THIS TEXT LIVES HERE AND NOT IN login.html: it used to be a <details> box
// in the template, which meant every visitor of the sign-in page saw a
// "How this page works" button. The explanation belongs to the source, not to
// the screen - so it stays here as a region the editor can fold away.
// #endregion
/** The /account/login page. */
@Component({
  selector: 'app-login',
  imports: [MatCard, AuthForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private accountService = inject(AccountService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  // #region Safe return URL handling
  // It comes from the query string (?returnUrl=/checkout) because a guard sends
  // the user here when they try to open a page that needs a signed-in user.
  // Without it everybody would land on the shop page.
  //
  // SECURITY: only paths inside this app are accepted - an absolute URL
  // (https://evil.com) would be an open redirect, so it is thrown away.
  // #endregion
  /** Where to go after a successful sign-in. */
  returnUrl = this.safeReturnUrl(this.activatedRoute.snapshot.queryParams['returnUrl'])

  /** Called by the form once the user is signed in. */
  onAuthenticated() {
    if (this.accountService.isAdmin()) {
      this.router.navigateByUrl('/admin')
      return
    }
    this.router.navigateByUrl(this.returnUrl)
  }

  /** Keeps only local paths such as "/checkout" or "/orders". */
  private safeReturnUrl(url: string | undefined): string {
    if (!url || !url.startsWith('/') || url.startsWith('//')) return '/shop'
    return url
  }
}
