import { inject, Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { forkJoin, of } from 'rxjs';
import { AccountService } from './account-service';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  private cartService = inject(CartService)
  private accountService = inject(AccountService)
  
  init() {
    // of(null) wraps a plain value in an Observable so both branches
  // of this ternary return the same type (Observable), not Observable | null
    const cartId = localStorage.getItem('cart_id')
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null)

// NOTE: this method itself has no .subscribe() — it's triggered by
  // lastValueFrom(initService.init()) inside provideAppInitializer (app.config.ts).
  // lastValueFrom subscribes internally, waits for completion, and converts
  // the result to a Promise so it can be awaited during app bootstrap.
    return forkJoin({
          //  └── forkJoin merges TWO Observables into ONE combined Observable
      cart: cart$,
      user: this.accountService.getUserInfo()
    })
  }
}
