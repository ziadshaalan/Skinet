import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { map, of } from 'rxjs';

//guard auto subscribes to observables
export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService)
  const router = inject(Router)
  // Prevents unauthenticated users from accessing protected routes.
// If the user is not logged in, redirect to login and save the requested URL
// so they can be redirected back after successful authentication.

  if (accountService.currentUser()) {
    return of(true)
  } else {
    return accountService.getAuthState().pipe(
      map(auth => {
        if(auth.isAuthenticated) { 
          return true 
        } else {
           router.navigate(['account/login'], {queryParams: {returnUrl: state.url}}) //2nd argument saves the url from which the user has been forwarded from in order to return user back after log in completion
           return false
        }
      })
    )
  }
};
