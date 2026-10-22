import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Snackbar } from '../services/snackbar';

// #region The handled error cases
// Intercepts all outgoing HTTP requests and handles errors centrally.
// This prevents repetitive error handling in individual services/components.
//
// Handled cases:
//  - 400 Bad Request  → two sub-cases:
//       a) ModelState validation errors (err.error.errors) → flattened into
//          a string[] and thrown for the component to display per-field
//       b) Plain bad request → snackbar with server's error message
//  - 401 Unauthorized → snackbar with server's auth error message
//  - 403 Forbidden    → snackbar "Forbidden"
//  - 404 Not Found    → redirects to /not-found page
//  - 429 Too Many Requests → left to the component (the auth forms show
//          "Too many attempts, please wait a minute")
//  - 500 Server Error → redirects to /server-error page
//
// Error messages come from the server (err.error.title for ASP.NET validation
// errors, err.error for plain string messages).
//
// throwError() re-throws the error so individual components can still
// react to it if needed (e.g. stop a loading spinner).
// #endregion
/** Global HTTP Error Interceptor */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const snackbar = inject(Snackbar)

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 400) {
        if (err.error.errors) {
          // #region Flattening the ModelState errors
          // ASP.NET Core returns the validation problems as an object:
          //   { "errors": { "Password": ["Too short"], "Email": ["Invalid"] } }
          // The flat() at the end turns that into a plain list of strings:
          //   ["Too short", "Invalid"]
          // which is the shape the components expect when they show the
          // messages under the form.
          // #endregion
          const modelStateError = []
          for (const key in err.error.errors) {
            if (err.error.errors[key]) {
              modelStateError.push(err.error.errors[key])
            }
          }
          throw modelStateError.flat()
        }
        else {
          snackbar.error(err.error.title || err.error)
        }
      }

      // #region Why the login request is skipped
      // The /login request is left out on purpose: when the password is
      // wrong the sign-in form shows the message itself ("Incorrect email
      // or password"), and a snackbar on top of that would say the same
      // thing twice.
      //
      // The check uses endsWith('/login') and not includes(), because the
      // built-in Identity API endpoint is "/api/login" while ours is
      // "/api/account/login" - both have to be recognised.
      // #endregion
      /** 401 Unauthorized. */
      if (err.status === 401 && !req.url.endsWith('/login')) {
        snackbar.error(err.error.title || err.error)
      }

      if (err.status === 403) {
        snackbar.error("Forbidden")
      }
      if (err.status === 404) {
        router.navigateByUrl('/not-found')
      }
      if (err.status === 500) {
        const navigationExtras: NavigationExtras = { state: { error: err.error } }   // Pass error data to /server-error component via navigation state (not visible in URL)

        router.navigateByUrl('/server-error', navigationExtras)
      }
      return throwError(() => err)
    })
  )
};
