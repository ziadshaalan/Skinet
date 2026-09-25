import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { firstValueFrom } from 'rxjs';
import { Snackbar } from '../services/snackbar';

// Authentication guard.
// Runs on the parent route first. If the user is not authenticated,
// navigation is redirected to login and the child route is never activated.
// Only after authentication succeeds can the child route continue to adminGuard.
export const authGuard: CanActivateFn = async (route, state) => {

  const accountService = inject(AccountService);
  const router = inject(Router);
  const snackbar = inject(Snackbar)

  // User already loaded
  if (accountService.currentUser()) {
    return true;
  }

  // User not loaded → wait for the user-info request to finish
  const user = await firstValueFrom(
    accountService.getUserInfo()
  );

  // User exists → getUserInfo() has already set currentUser
  if (user) {
    return true;
  }

  // No user → anonymous → redirect to login
    snackbar.error("You are not authenticated, Please log in.")
  return router.createUrlTree(
    ['/account/login'],
    {
      queryParams: { returnUrl: state.url }
    }
  );
};