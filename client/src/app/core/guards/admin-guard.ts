import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { Snackbar } from '../services/snackbar';
// Authorization guard.
// Runs on the child route, so it is reached only after authGuard
// has allowed the parent route to activate.
// At this point, the user is authenticated, so this guard only checks
// whether the user has the Admin role.
export const adminGuard: CanActivateFn = () => {

  const accountService = inject(AccountService);
  const router = inject(Router);
  const snackbar = inject(Snackbar);

  // authGuard already guaranteed that a user exists.
  if (accountService.isAdmin()) {
    return true
  }

  // Authenticated, but not an admin.
  snackbar.error('Request denied; You are not an admin.');
  return router.createUrlTree(['/shop']);
};