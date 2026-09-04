import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { OrderSummary } from "../../shared/components/order-summary/order-summary";
import { Router, RouterLink } from "@angular/router";
import { MatAnchor, MatButton } from "@angular/material/button";
import { StripeService } from '../../core/services/stripe-service';
import { Snackbar } from '../../core/services/snackbar';
import { ConfirmationToken, StripeAddressElement, StripeAddressElementChangeEvent, StripePaymentElement, StripePaymentElementChangeEvent } from '@stripe/stripe-js';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Address } from '../../shared/models/user';
import { AccountService } from '../../core/services/account-service';
import { finalize, firstValueFrom } from 'rxjs';
import { CheckoutDelivery } from "./checkout-delivery/checkout-delivery";
import { CheckoutReview } from "./checkout-review/checkout-review";
import { CartService } from '../../core/services/cart-service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-checkout',
  imports: [
    MatStepperModule,
    OrderSummary,
    RouterLink,
    MatAnchor,
    MatButton,
    MatCheckboxModule,
    CheckoutDelivery,
    CheckoutReview,
    CurrencyPipe,
    MatProgressSpinnerModule
],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit, OnDestroy {
  private router = inject(Router)
  private stripeService = inject(StripeService)
  private accountService = inject(AccountService)
  cartService = inject(CartService)
  addressElement?: StripeAddressElement
  paymentElement?: StripePaymentElement
  private snackbar = inject(Snackbar)
  saveAddress = false
  completionStatus = signal<{address: boolean, card: boolean, delivery: boolean}>(
    {address: false, card: false, delivery: false}
  )
  confirmationToken?: ConfirmationToken
  loading = false

async ngOnInit() {
  
  try {
    this.addressElement = await this.stripeService.createAddressElement()
    this.addressElement.mount('#address-element')
    this.addressElement.on('change', this.handleAddressChange)

    this.paymentElement = await this.stripeService.createPaymentElement()
    this.paymentElement.mount('#payment-element')
    this.paymentElement.on('change', this.handlePaymentChange)
  } catch (error: any) {
    this.snackbar.error(error.message)
  }
}

/*
1. ngOnInit → Stripe AddressElement/PaymentElement mounted, .on('change', handler) registered
2. User types in Address/Payment element → Stripe validates internally
3. Stripe fires 'change' → calls handleAddressChange / handlePaymentChange with event.complete
4. Handler updates its key in shared completionStatus signal (address or card)
5. Delivery: user clicks radio → updateDeliveryMethod() → deliveryComplete.emit(true/false)
6. Parent's handleDeliveryChange($event) runs → updates completionStatus.delivery
7. All three handlers write into the SAME completionStatus signal, each touching only its own key
8. computed() combines all three: canPay = address && card && delivery
9. canPay() drives UI — e.g. disables "Pay" button until all three steps are valid
*/

handleAddressChange = (event: StripeAddressElementChangeEvent) => {
  this.completionStatus.update(state => {
    state.address = event.complete
    return state
  })
}

handlePaymentChange = (event: StripePaymentElementChangeEvent) => {
  this.completionStatus.update(state => {
    state.card = event.complete
    return state
  })
}

handleDeliveryChange(event: boolean) {
  this.completionStatus.update(state => {
    state.delivery = event
    return state
  })
}

async getConfirmationToken() {
try {

  if (Object.values(this.completionStatus()).every(status => status === true)) { //.every() is a built-in array method — returns true only if every single element satisfies the condition
    const result = await this.stripeService.createConfirmationToken()
    if (result.error) throw new Error(result.error.message)
    this.confirmationToken = result.confirmationToken
    console.log(this.confirmationToken)
  } 
  
} catch (error: any) {
  this.snackbar.error(error.message)
}
}

async confirmPayment(stepper: MatStepper) {
  this.loading = true
  try {
    if (this.confirmationToken) {
      const result = await this.stripeService.confirmPayment(this.confirmationToken)
      if (result.error) {
        throw new Error(result.error.message)
      } else {
        this.cartService.deleteCart()
        this.cartService.selectedDelivery.set(null) 
        this.router.navigateByUrl('/checkout/success')
      }
    }
  } catch (error: any) {
    this.snackbar.error(error.message || 'Something went wrong')
    stepper.previous()
  } finally {
    this.loading = false
  }

}


async onStepChange(event: StepperSelectionEvent) {
  if (event.selectedIndex === 1) {
    if (this.saveAddress) {
      const address = await this.getAddressFromStripeAddress() 
      address && firstValueFrom(this.accountService.updateAddress(address))
    }
  }
  if (event.selectedIndex === 2) {
    await firstValueFrom(this.stripeService.createOrUpdatePaymentIntent())
  }
  if (event.selectedIndex === 3) {
    await this.getConfirmationToken()
  }
}
  
private async getAddressFromStripeAddress(): Promise<Address | null> {
  const result = await this.addressElement?.getValue()
  const address = result?.value.address // drills into the nested response shape Stripe returns
    
  if (address) {      // reshapes Stripe's field names into YOUR Address model
    return {
      line1: address.line1,
      line2: address.line2,
      city: address.city,
      country: address.country,
      state: address.state,
      postalCode: address.postal_code // note: Stripe uses snake_case (postal_code) → your model uses camelCase (postalCode), thats why built in method of stripe wouldn't have worked
    }
  } else return null
}

onSaveAddressCheckboxChange(event: MatCheckboxChange) {
  this.saveAddress = event.checked
}

ngOnDestroy(): void {
   // Reset Stripe state when leaving checkout, since the service is a singleton and won't auto-clear itself
  this.stripeService.disposeElements()
}

}
