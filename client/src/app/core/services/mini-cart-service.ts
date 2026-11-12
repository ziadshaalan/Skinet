import { Injectable, signal } from '@angular/core';

// ── MINI-CART DRAWER — STATE SERVICE ──
//
// Owns ONE piece of UI state: is the slide-in basket drawer on screen or not.
//
// WHY A SEPARATE SERVICE (and not a property on CartService):
// CartService owns cart DATA (items, totals, API sync). The drawer is UI state.
// Keeping them apart means anything can open/close the drawer (CartService
// after an add, this drawer's own buttons) without any component needing a
// reference to any other component — they all talk to this service instead.
//
// WHY providedIn: 'root' — one instance for the whole app, injectable
// anywhere in the standalone app, no NgModule registration needed.

@Injectable({
  providedIn: 'root',
})
export class MiniCartService {
  // private + asReadonly() = the WRITE key stays inside this class. The rest
  // of the app gets a read-only view of the signal, so the ONLY way to open
  // or close the drawer is through open()/close() below — one documented path.
  private readonly isOpenSignal = signal(false)
  readonly isOpen = this.isOpenSignal.asReadonly()

  // Called by CartService.addItemToCart() AFTER the cart sync with the API
  // succeeded — the drawer is the "it worked" feedback for adding an item.
  open() {
    this.isOpenSignal.set(true)
  }

  // Called by the drawer's X button, backdrop click, Escape key, and both
  // footer buttons ("Continue shopping" / "View your basket").
  close() {
    this.isOpenSignal.set(false)
  }
}
