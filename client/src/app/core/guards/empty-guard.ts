import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart-service';
import { Snackbar } from '../services/snackbar';
import { of } from 'rxjs';

export const emptyGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const cartService = inject(CartService)
    const snack = inject(Snackbar)

    if (!cartService.cart() || cartService.cart()?.items.length === 0) {
    snack.error('Your cart is empty');
    router.navigateByUrl('/cart');
    return false;
  }
  return true;
};
