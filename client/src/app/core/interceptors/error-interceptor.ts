import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Snackbar } from '../services/snackbar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const snackbar = inject(Snackbar)

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 400){
        if (err.error.errors) {
          const modelStateError = []
          for (const key in err.error.errors) {
            if (err.error.errors[key]){
              modelStateError.push(err.error.errors[key])
            }
          }
          throw modelStateError.flat()  
          // converts this [["Name is required", "Name too short"], ["Price must be positive"]] to 
          //["Name is required", "Name too short", "Price must be positive"]
        }
         else {
        snackbar.error(err.error.title || err.error)
        }
      }
      if (err.status === 401) {
        snackbar.error(err.error.title || err.error)
      }
      if (err.status === 404) {
        router.navigateByUrl('/not-found')
      }
      if (err.status === 500) {
        const navigationExtras: NavigationExtras = {state: {error:err.error}}   // Pass error data to /server-error component via navigation state (not visible in URL)

        router.navigateByUrl('/server-error', navigationExtras)
      }
      return throwError (() => err)
    })
  )
};



/**
 * Global HTTP Error Interceptor
 *
 * Intercepts all outgoing HTTP requests and handles errors centrally.
 * This prevents repetitive error handling in individual services/components.
 *
 * Handled cases:
 *  - 400 Bad Request  → two sub-cases:
 *       a) ModelState validation errors (err.error.errors) → flattened into
 *          a string[] and thrown for the component to display per-field
 *       b) Plain bad request → snackbar with server's error message
 *  - 401 Unauthorized → snackbar with server's auth error message
 *  - 404 Not Found    → redirects to /not-found page
 *  - 500 Server Error → redirects to /server-error page
 *
 * Error messages come from the server (err.error.title for ASP.NET validation
 * errors, err.error for plain string messages).
 *
 * throwError() re-throws the error so individual components can still
 * react to it if needed (e.g. stop a loading spinner).
 */
