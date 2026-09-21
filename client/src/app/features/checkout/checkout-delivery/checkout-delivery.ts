import { Component, inject, OnInit, output } from '@angular/core';
import { CheckoutService } from '../../../core/services/checkout-service';
import {MatRadioModule} from '@angular/material/radio';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart-service';
import { DeliveryMethod } from '../../../shared/models/deliveryMethod';
import { firstValueFrom } from 'rxjs';
//The chain: user picks delivery → signal updates UI/totals instantly (client-side, no network) →
//same click also pushes deliveryMethodId to Redis → later, moving to the Payment step re-triggers the backend to recompute
//the real charge amount using that persisted deliveryMethodId → new clientSecret/amount comes back and syncs into the cart signal.


/*
1. CheckoutDelivery.ngOnInit() → checkoutService.getDeliveryMethods().subscribe()
2. CheckoutService.getDeliveryMethods() → HTTP GET payments/delivery-methods
3. Response → map() → this.deliveryMethod = methods.sort(...)
4. ngOnInit callback → checks cart.deliveryMethodId → cartService.selectedDelivery.set(method)
5. Template renders → [checked] evaluates per radio button

6. User clicks a radio → (change) fires → updateDeliveryMethod($event.value)
7. Inside updateDeliveryMethod (sync, top to bottom):
   a) selectedDelivery.set(method) → totals recomputes instantly
   b) cart.deliveryMethodId = method.id
   c) cartService.setCart(cart)
8. Inside setCart(): POST /cart → Redis saves → subscribe → cart.set(response) → totals recomputes again

9. User clicks "Next" (Shipping → Payment) → mat-stepper fires → onStepChange(event)
10. event.selectedIndex === 2 → stripeService.createOrUpdatePaymentIntent()
11. Reads cart().id → POST payments/{cartId}

12. Backend: PaymentController → PaymentService.CreateOrUpdatePaymentIntent(cartId)
    a) GetCartAsync(cartId) → Redis
    b) DeliveryMethodId.HasValue → dmRepo.GetByIdAsync → SQL → shippingPrice
    c) foreach item → re-fetch product from SQL → sync price if stale
    d) PaymentIntentId exists → service.UpdateAsync(...) → Stripe
    e) Stripe processes update
    f) SetCartAsync(cart) → Redis save
    g) returns cart

13. Angular: map(cart => setCart(cart)) → REDUNDANT second POST /cart → Redis re-save
14. firstValueFrom resolves → stepper completes transition to Payment step
*/


@Component({
  selector: 'app-checkout-delivery',
  imports: [
    MatRadioModule,
    CurrencyPipe,
  ],
  templateUrl: './checkout-delivery.html',
  styleUrl: './checkout-delivery.css',
})
export class CheckoutDelivery implements OnInit {
  checkoutService = inject(CheckoutService)
  cartService = inject(CartService)
  deliveryComplete = output<boolean>()

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe({
      next: methods => {
        if (this.cartService.cart()?.deliveryMethodId) {
          const method = methods.find(x => x.id === this.cartService.cart()?.deliveryMethodId)
          if (method) {
          this.cartService.selectedDelivery.set(method)
          this.deliveryComplete.emit(true)
          }
        }
      }
    })
  }

 async updateDeliveryMethod(method: DeliveryMethod ) {
    this.cartService.selectedDelivery.set(method)
    const cart = this.cartService.cart()
    if (cart) {
      cart.deliveryMethodId = method.id
      await firstValueFrom(this.cartService.setCart(cart))
      this.deliveryComplete.emit(true)

    }
    
  }
}
