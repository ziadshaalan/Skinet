import { Route } from "@angular/router";
import { Login } from "./login/login";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { ResetPassword } from "./reset-password/reset-password";

// #region The routes in detail
// They are lazy loaded (loadComponent would be even lazier, but these pages
// are small), so the router only downloads them when they are really opened.
//
// THE ROUTES:
//
//   login           the sign-in page. It shows the shared <app-auth-form>,
//                   which also creates the account when the email is unknown
//                   (the "email-first" flow).
//   register        REDIRECTS to login. There is no separate register page any
//                   more - the same form handles both, so the old route is
//                   kept only so that old links and bookmarks still work
//                   instead of landing on a 404.
//   forgot-password asks for the address and lets the server send a reset link.
//   reset-password  sets the new password. It is opened FROM THE EMAIL and
//                   needs the address and the token in the query string.
// #endregion
/** The pages of the "account" area. */
export const accountRoutes: Route[] = [
    { path: 'login', component: Login },
    { path: 'register', redirectTo: 'login', pathMatch: 'full' },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'reset-password', component: ResetPassword },
]
