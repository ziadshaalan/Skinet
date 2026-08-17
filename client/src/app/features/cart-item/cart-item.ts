import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart-service';
import { Cart, CartItem } from '../../shared/models/cart';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
@Component({
  selector: 'app-cart-item',
  imports: [
    RouterLink,
    MatIcon,
    CurrencyPipe,
    MatButton,
    MatIconButton,
],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItemComponent {

  cartService = inject(CartService)
  item = input.required<CartItem>()

incrementQuantity() {
this.cartService.addItemToCart(this.item())
}

decrementQuantity() {
this.cartService.removeItemFromCart(this.item().productId)
}

removeItemFromCart() {
this.cartService.removeItemFromCart(this.item().productId, this.item().quantity)
}
}
