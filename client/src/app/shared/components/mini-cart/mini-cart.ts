import { Component, computed, HostListener, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart-service';
import { MiniCartService } from '../../../core/services/mini-cart-service';
import { CartItem } from '../../../shared/models/cart';

// ── MINI-CART DRAWER — COMPONENT ──
//
// A slide-in summary of the basket that appears after "Add to cart" (from the
// shop grid OR the product details page).
//
// FLOW:
//   1. User clicks "Add to cart" somewhere
//   2. CartService.addItemToCart() POSTs the updated cart to the API
//   3. On success CartService calls miniCartService.open()
//   4. This component reacts to that signal and slides itself in
//   5. User edits with the +/- steppers or the delete button (below), or
//      closes via X, backdrop click, Escape, or one of the 2 footer buttons
//
// The drawer is a LIVE view of the cart: the steppers and the delete button
// reuse the same CartService methods as the full cart page (app-cart-item),
// and since cart()/totals() are signals the drawer re-renders itself the
// moment the service's POST round-trips — there is no manual refresh code
// anywhere in this component.

@Component({
  selector: 'app-mini-cart',
  imports: [CurrencyPipe, MatButton, MatIconButton, MatIcon],
  templateUrl: './mini-cart.html',
  styleUrl: './mini-cart.css',
})
export class MiniCart {
  // DATA: the cart items + totals to display (injected, never written to here).
  cartService = inject(CartService)
  // UI STATE: only the service decides whether the drawer is on screen.
  miniCartService = inject(MiniCartService)
  // Router is private because the template never navigates directly —
  // navigation goes through viewBasket() so the drawer always closes first.
  private router = inject(Router)

  // Subtotal for the footer. CartService.totals() is ALREADY a computed
  // signal, so chaining it here means this re-evaluates automatically
  // whenever the cart changes (e.g. while the drawer is open).
  // `?? 0` feeds the currency pipe a number instead of null when there is
  // no cart yet (totals() returns null in that case).
  subtotal = computed(() => this.cartService.totals()?.subtotal ?? 0)

  // Single close path, reused by: the X button, backdrop click, Escape below,
  // and both footer buttons. One method = one place to change dismiss logic.
  close() {
    this.miniCartService.close()
  }

  // "Continue shopping": the drawer was opened OVER the page the user was
  // browsing, so closing it is all that is needed — they are already there.
  continueShopping() {
    this.close()
  }

  // "View your basket": close FIRST, then navigate. Navigating first would
  // leave the drawer covering the cart page it just navigated to.
  viewBasket() {
    this.close()
    this.router.navigateByUrl('/cart')
  }

  // ── PER-ITEM CONTROLS (compact versions of the cart page's steppers) ──
  // All three only DELEGATE to CartService — the same code paths the full
  // cart page uses, so behaviour stays identical everywhere: the service
  // merges the change, POSTs the cart, updates the signal, and the drawer
  // re-renders off that signal with zero extra wiring here.

  // "+" — add one more of this item.
  increment(item: CartItem) {
    // openMiniCart=false: the drawer is ALREADY open, so opening it again
    // would do nothing — but keeping every basket-internal edit "quiet"
    // preserves the one rule of the feature: the drawer only slides open
    // from an add-to-cart click OUTSIDE the basket UI.
    this.cartService.addItemToCart(item, 1, false)
  }

  // "-" — remove ONE unit. CartService owns the "does this drop the line to
  // 0? then remove the whole line" logic, so it stays in one place.
  decrement(item: CartItem) {
    this.cartService.removeItemFromCart(item.productId)
  }

  // Delete — remove the ENTIRE line, done by passing the full quantity so
  // the service subtracts all of it at once. If it was the last product, the
  // service deletes the cart and the drawer falls back to its empty message.
  removeItem(item: CartItem) {
    this.cartService.removeItemFromCart(item.productId, item.quantity)
  }

  // Keyboard accessibility: Escape dismisses the drawer from anywhere.
  // 'document:' prefix = listen on the whole page, not just inside this
  // component's own elements (the user's focus is on the page behind it).
  @HostListener('document:keydown.escape')
  onEscape() {
    this.close()
  }
}
