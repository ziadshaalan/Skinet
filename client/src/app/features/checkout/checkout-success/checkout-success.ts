import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Signalr } from '../../../core/services/signalr';
import { AddressPipe } from '../../../shared/pipes/address-pipe';
import { PaymentPipe } from '../../../shared/pipes/payment-pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrderService } from '../../../core/services/order-service';

@Component({
  selector: 'app-checkout-success',
  imports: [
    MatButton,
    RouterLink,
    MatProgressSpinnerModule,
    AddressPipe,
    PaymentPipe,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './checkout-success.html',
  styleUrl: './checkout-success.css',
})
export class CheckoutSuccess implements OnDestroy {
  signalrService = inject(Signalr)
  private orderService = inject(OrderService)

  ngOnDestroy(): void {   // Basically code inside here is executed when user leave the checkout/success page.
    this.orderService.orderComplete = false
    this.signalrService.orderSignal.set(null)
  }
}
