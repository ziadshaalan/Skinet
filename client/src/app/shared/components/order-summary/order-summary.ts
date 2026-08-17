import { Component, inject } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from "@angular/material/select";
import { MatButton } from '@angular/material/button';
import { CartService } from '../../../core/services/cart-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    CurrencyPipe,
    RouterLink
    ],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {
  cartService = inject(CartService)

}
