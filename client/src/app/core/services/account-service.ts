import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Address, User } from '../../shared/models/user';
import { tap } from 'rxjs';
import { Signalr } from './signalr';

// #region Why a separate service
// WHY A SEPARATE SERVICE: components should not know about URLs, they should
// know about "logging in" or "asking for a reset link". Keeping the URLs here
// means a change on the server side touches one file instead of twenty
// components.
//
// EVERY method returns an Observable (rxjs). Nothing happens until somebody
// subscribes - that is why the components use firstValueFrom(...) to turn it
// into a promise and can use async/await.
// #endregion
/** The one place in the client that talks to the account endpoints of the API. */
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // #region Why the url is relative
  // It is a RELATIVE url ("api/") on purpose: then the browser sends the
  // request to the same origin that served the page. The Angular dev server
  // and the production build both have a proxy that forwards "/api" to the
  // .NET server, so the client never needs to know the server's address and
  // there is no CORS problem and no cookie problem either.
  // #endregion
  /** The base address of the API. */
  baseUrl = environment.apiUrl

  private http = inject(HttpClient)
  private signalrService = inject(Signalr)

  // #region The user starts as null
  // It starts as null because nobody is signed in when the app starts.
  // #endregion
  /** The signed-in user, kept in a signal so every part of the app can react to it (the header shows the email, the admin area checks isAdmin()). */
  currentUser = signal<User | null>(null)

  // #region The roles in two shapes
  // This is a computed signal: the value is derived from currentUser and is
  // recalculated automatically by Angular whenever currentUser changes. That
  // is why it does not need to be updated manually after a login.
  //
  // The roles can arrive in two shapes, so both are handled:
  //   roles = ["Admin", "Member"]  -> check whether "Admin" is in the list
  //   roles = "Admin"              -> compare the string directly
  // #endregion
  /** Is the current user an administrator? */
  isAdmin = computed(() => {
    const roles = this.currentUser()?.roles
    return Array.isArray(roles) ? roles.includes('Admin') : roles === 'Admin'
  })

  // #region Why our own login endpoint
  // The endpoint is OUR "api/account/login", not the built-in Identity API
  // endpoint ("api/login"). The difference matters:
  //
  //   - the built-in one knows nothing about our rate limiting and account
  //     lockout rules, so it could be used to brute-force passwords;
  //   - our endpoint answers 401 for a wrong password and 429 when the
  //     account is locked out or too many attempts came from the same IP.
  //
  // withCredentials is added automatically by the auth interceptor (see
  // core/interceptors/auth-interceptor.ts) so the auth cookie is sent; it does
  // not have to be repeated here.
  // #endregion
  /** Signs the user in with an email and a password. */
  login(values: { email: string; password: string }) {
    const params = new HttpParams().append('useCookies', true)
    return this.http.post<User>(this.baseUrl + 'account/login', values, { params }).pipe(
      // tap() is a side effect: it does NOT change the value that is emitted
      // downstream, it only does something extra. Here we open the SignalR
      // connection so the server can push notifications (a new order, ...) to
      // this user in real time.
      tap(() => this.signalrService.createHubConnection())
    )
  }

  // #region The captcha token
  // The payload also contains the Turnstile captcha token: the server refuses
  // to create an account without a valid token, which stops bots from filling
  // the database with fake accounts.
  // #endregion
  /** Creates a new account. */
  register(values: {
    email: string
    firstName: string
    lastName: string
    password: string
    marketingOptIn: boolean
    captchaToken: string
  }) {
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      tap(() => this.signalrService.createHubConnection())
    )
  }

  /** Signs the user out and closes the SignalR connection. */
  logout() {
    return this.http.post(this.baseUrl + 'account/logout', {}).pipe(
      tap(() => this.signalrService.stopHubConnection())
    )
  }

  // #region Storing the user in the signal
  // The result is stored in currentUser, so the header and the admin checks
  // have something to work with. tap() is used (not map) because the value
  // that travels on is still the user object - we only want the side effect.
  // #endregion
  /** Loads the signed-in user from the server. */
  getUserInfo() {
    return this.http.get<User>(this.baseUrl + 'account/user-info').pipe(
      tap(user => this.currentUser.set(user))
    )
  }

  /** Saves the address of the signed-in user. */
  updateAddress(address: Address) {
    return this.http.post(this.baseUrl + 'account/address', address).pipe(
      tap(() => {
        // Keep the copy in the signal in sync, so the UI shows the new
        // address without having to fetch the user again.
        this.currentUser.update(user => {
          if (user) user.address = address
          return user
        })
      })
    )
  }

  /** Asks the server whether the current browser session is signed in. */
  getAuthState() {
    return this.http.get<{ isAuthenticated: boolean }>(this.baseUrl + 'account/is-authenticated')
  }

  // #region The email-first flow
  // This is what drives the "email-first" sign-in flow: the answer decides
  // whether the form shows the "type your password" screen or the
  // "create your account" screen.
  //
  // providers lists the social providers the account is linked to ("Google").
  // It is empty for a normal account, and it lets the form tell
  // the user exactly which button to press when the account has no password.
  // #endregion
  /** Asks the server whether an account already uses this email address. */
  checkEmail(email: string) {
    return this.http.post<{ exists: boolean; hasPassword: boolean; providers: string[] }>(
      this.baseUrl + 'account/check-email',
      { email }
    )
  }

  // #region Why it always answers 200
  // The server always answers 200, even when no account exists for the
  // address - otherwise this endpoint could be used to find out which
  // addresses are registered.
  // #endregion
  /** Asks the server to send a "reset your password" link to this address. */
  forgotPassword(email: string) {
    return this.http.post(this.baseUrl + 'account/forgot-password', { email })
  }

  // #region What the token proves
  // The token proves that this browser really is the one that received the
  // email, so the server can accept the new password.
  // #endregion
  /** Sets a new password using the token from the reset link. */
  resetPassword(values: { email: string; token: string; newPassword: string }) {
    return this.http.post(this.baseUrl + 'account/reset-password', values)
  }

  // #region Why the list matters
  // The buttons are drawn from this list, so a provider that is not set up on
  // the server never shows a button that cannot work.
  // #endregion
  /** The social sign-in providers this server is configured for. */
  getExternalProviders() {
    return this.http.get<string[]>(this.baseUrl + 'account/external-providers')
  }

  // #region Why the browser leaves the app
  // This is NOT used for an HTTP call. The browser has to LEAVE the app, go to
  // the provider and come back to the API's callback - a fetch() would be
  // killed by the browser as soon as the page navigates away. So the URL is
  // put into the address bar instead (see AuthForm.continueWith).
  // #endregion
  /** The address the browser has to visit to start a social sign-in. */
  externalLoginUrl(provider: string, returnUrl: string) {
    const path = `${this.baseUrl}account/external-login/${provider.toLowerCase()}?returnUrl=${encodeURIComponent(returnUrl)}`
    return new URL(path, document.baseURI).toString()
  }
}
