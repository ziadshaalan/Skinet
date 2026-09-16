import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize, identity } from 'rxjs';
import { Busy } from '../services/busy';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment';

// Tracks every outgoing HTTP request so a global spinner can show/hide correctly,
// even when multiple requests are in flight at once.
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(Busy)

  busyService.busy()

  return next(req).pipe(
    ( environment.production ? identity : delay(500)),   //When app runs in production return identity (null or nothing) if development do an artifical delay  time of 5 ms to everyrequest going to api and that what interceptor dose (interceptor is a piece of code thatsits between your Angular app and the HTTP request.)
    finalize(() => busyService.idle())                   // Always runs — success, error, or cancel — so the counter never gets stuck.
  )
};
