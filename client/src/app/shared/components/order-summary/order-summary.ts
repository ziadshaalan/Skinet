import { Component, inject } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from "@angular/material/select";
import { MatButton, MatIconButton } from '@angular/material/button';
import { CartService } from '../../../core/services/cart-service';
import { CurrencyPipe, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import {firstValueFrom} from 'rxjs';
import { Snackbar } from '../../../core/services/snackbar';
import { StripeService } from '../../../core/services/stripe-service';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-order-summary',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    CurrencyPipe,
    RouterLink,
    FormsModule,
    MatIcon,
    MatIconButton
],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  cartService = inject(CartService)
  private stripeService = inject(StripeService)
  location = inject(Location) // Reads current route path to conditionally show/hide UI in shared component
  private snackBar = inject(Snackbar)
  code?: string   //  why two way bind Variable instead of parameter code function, the reason is the original code clears this.code is likely simply to clear the textbox after successful application.

   onApplyVoucherCode() {
   if (!this.code) return
   this.cartService.getCouponFromAppliedCode(this.code).subscribe({
    next: async coupon =>  {
      const cart = this.cartService.cart()
      if (cart) {
        cart.coupon = coupon
        await firstValueFrom(this.cartService.setCart(cart))
        this.snackBar.success("Coupon applied successfully!")

        this.code = undefined
        
      }
      if (this.location.path() === '/checkout') {   //if we are already on checkout, update the Stripe PaymentIntent so its amount reflects the newly discounted cart.
        await firstValueFrom(this.stripeService.createOrUpdatePaymentIntent())
      }
    }
   })
  }

  
   async removeCouponFromCart() {
    const cart = this.cartService.cart()
    if (!cart) return
    if (cart.coupon) cart.coupon = undefined
    await firstValueFrom(this.cartService.setCart(cart))
    if (this.location.path() === '/checkout') {
      await firstValueFrom(this.stripeService.createOrUpdatePaymentIntent())
    }
   }

}
