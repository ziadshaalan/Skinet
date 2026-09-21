import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cart, CartItem, Coupon } from '../../shared/models/cart';
import { Product } from '../../shared/models/product';
import { firstValueFrom, map, tap } from 'rxjs';
import { NotFound } from '../../shared/not-found/not-found';
import { DeliveryMethod } from '../../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = environment.apiUrl
  private http = inject(HttpClient)
  cart = signal<Cart | null>(null)
  
  itemCount = computed(() => { // COMPUTED SIGNAL — auto-updates whenever `cart` changes; drives the cart badge count.
    // REDUCE — sums item.quantity across the cart into one total number.
    return this.cart()?.items.reduce((sum, item) => sum + item.quantity, 0)
  })
  selectedDelivery = signal<DeliveryMethod | null>(null)


  //Reading a signal inside computed() registers it as a dependency automatically — no manual subscribe/unsubscribe needed
  totals = computed(() => {
     const cart = this.cart()   // ← reading this signal registers it as a dependency
     const delivery = this.selectedDelivery()
     if (!cart) return null
     const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
     const shipping = delivery ? delivery.price : 0
     let discount = 0

     if (cart.coupon) {
      if (cart.coupon.amountOff) {
        discount = cart.coupon.amountOff
      } else if (cart.coupon.percentOff) {
        discount = subtotal * (cart.coupon.percentOff / 100)
      }
     }

    return {
      subtotal,
      shipping,
      discount,
      total: subtotal + shipping - discount
    }
  })

  getCart (id: string) {
    return this.http.get<Cart>(this.baseUrl + 'cart?id=' + id).pipe(
      map(cart => {
        this.cart.set(cart)
        return cart
      })
    )
  }
  setCart(cart: Cart) {
    return this.http.post<Cart>(this.baseUrl + 'cart', cart).pipe(
      tap(cart => {
        this.cart.set(cart)
        return cart
      })
    )
  }

  // ── CART FEATURE — CLIENT-SIDE LOGIC OVERVIEW ──
//
// Problem: "Add to cart" can be called with either a Product (from
// listing/details page) or a CartItem (already cart-shaped). This file
// normalizes both into one flow, merges into existing cart, then syncs to API.
//
// Flow: addItemToCart() is the entry point, calling:
//   1. createCart()          -> makes a new cart + id if none exists yet
//   2. isProduct()            -> TYPE GUARD: figures out at runtime whether
//                                 we got a Product or CartItem (TS can't know
//                                 this on its own from a union type — this
//                                 function teaches it how, via `item is Product`)
//   3. mapProductToCartItem() -> converts Product -> CartItem shape if needed
//   4. addOrUpdateItem()      -> merges into cart.items (bump qty if exists,
//                                 else push as new line)
//   5. setCart()              -> POSTs updated cart to API, updates the signal
//
// Key TS concept used: type guards (`item is Product`) let you safely
// narrow a union type (CartItem | Product) at runtime, since TypeScript
// types don't exist in compiled JavaScript.

  async addItemToCart(item: CartItem | Product, quantity = 1) {
    const cart = this.cart() ?? this.createCart()
    if (this.isProduct(item)) {
      item = this.mapProductToCartItem(item)
    }
    cart.items = this.addOrUpdateItem(cart.items, item, quantity)
    await firstValueFrom(this.setCart(cart))
  }
  

  createCart(): Cart {
    const cart = new Cart()
    localStorage.setItem('cart_id', cart.id)
    return cart
  }

  private isProduct(item: CartItem | Product): item is Product {
    return (item as Product).id !== undefined
  }


  mapProductToCartItem(item: Product): CartItem {
    return {
      productId: item.id,
      productName: item.name,
      price: item.price,
      quantity: 0,
      pictureUrl: item.pictureUrl,
      brand: item.brand,
      type: item.type
    }
  }

  addOrUpdateItem(items: CartItem[], item: CartItem, quantity: number): CartItem[] {
    const index = items.findIndex(x => x.productId === item.productId)
    if (index === -1) {
      item.quantity = quantity
      items.push(item)
    } else {
      items[index].quantity += quantity
    }
    return items
  }

  async removeItemFromCart(productId: number, quantity = 1) {
    const cart = this.cart()
    if (!cart) return
    const index = cart.items.findIndex(x => x.productId === productId)
    if (index !== -1) {
      if (cart.items[index].quantity > quantity) {
        // --cart.items[index].quantity
        cart.items[index].quantity -= quantity
      } else {
        cart.items.splice(index, 1)
      }

      if (cart.items.length === 0) {
        this.deleteCart()
      } else {
        await firstValueFrom(this.setCart(cart))
      }

    }
  }
  deleteCart() {
    this.http.delete(this.baseUrl + 'cart?id=' + this.cart()?.id).subscribe({
      next: () => {
        localStorage.removeItem('cart_id')
        this.cart.set(null)
      }
    })
  }

  getCouponFromAppliedCode(code: string) {
    return this.http.get<Coupon>(this.baseUrl + 'coupons/' + code)
  }

  

  

  

}
