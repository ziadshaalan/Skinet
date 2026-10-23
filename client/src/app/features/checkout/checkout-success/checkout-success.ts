import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Signalr } from '../../../core/services/signalr';
import { AddressPipe } from '../../../shared/pipes/address-pipe';
import { PaymentPipe } from '../../../shared/pipes/payment-pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrderService } from '../../../core/services/order-service';
import { GuestSession } from '../../../core/services/guest-session';
import { Order } from '../../../shared/models/order';

// ===== CheckoutSuccess: signed-in users get the order by SignalR push, guests get it by polling =====
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
export class CheckoutSuccess implements OnInit, OnDestroy {
  signalrService = inject(Signalr)
  private orderService = inject(OrderService)
  private guestSession = inject(GuestSession)

  // Read once on creation: the guest session is cleared when the page closes
  readonly isGuest = this.guestSession.isGuest()

  // Filled by polling (guests only)
  private guestOrder = signal<Order | null>(null)

  // The order the page shows: SignalR push for signed-in users, polled order for guests
  currentOrder = computed(() => this.signalrService.orderSignal() ?? this.guestOrder())

  // True when polling gave up before the webhook arrived
  timedOut = signal(false)

  private stopped = false

  ngOnInit() {
    if (this.isGuest) this.pollGuestOrder()
  }

  // Ask every 2s (max 15 times) until the webhook moves the order out of Pending
  private async pollGuestOrder() {
    const paymentIntentId = this.orderService.guestPaymentIntentId
    if (!paymentIntentId) return

    for (let attempt = 0; attempt < 15 && !this.stopped; attempt++) {
      try {
        const order = await firstValueFrom(this.orderService.GetGuestOrder(paymentIntentId))
        if (order.status !== 'Pending') {
          this.guestOrder.set(order)
          return
        }
      } catch {
        // A failed poll is not fatal: try again on the next round
      }
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    if (!this.stopped) this.timedOut.set(true)
  }

  ngOnDestroy(): void {   // Basically code inside here is executed when user leave the checkout/success page.
    this.stopped = true   // stops the polling loop
    this.orderService.orderComplete = false
    this.orderService.guestPaymentIntentId = null
    this.signalrService.orderSignal.set(null)
    // The guest is done: forget the email so the next checkout starts fresh
    this.guestSession.clear()
  }
}