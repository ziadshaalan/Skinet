import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { GuestSession } from '../services/guest-session';

// ===== checkoutAccessGuard: lets in a signed-in user OR a guest who gave an email; everyone else goes to the entry screen =====
export const checkoutAccessGuard: CanActivateFn = () => {
  const accountService = inject(AccountService)
  const guestSession = inject(GuestSession)
  const router = inject(Router)

  // Signed in: allowed, and any leftover guest email is dropped
  if (accountService.currentUser()) {
    guestSession.clear()
    return true
  }

  // Guest who already gave an email: allowed
  if (guestSession.isGuest()) return true

  // Neither: send to the entry screen
  return router.createUrlTree(['/checkout/start'])
};