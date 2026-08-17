  import { Component, inject, OnInit, Pipe } from '@angular/core';
  import { ShopService } from '../../core/services/shop-service';
  import { ActivatedRoute } from '@angular/router';
  import { Product } from '../../shared/models/product';
  import { CurrencyPipe } from '@angular/common';
  import { MatButton } from '@angular/material/button';
  import { MatInput, MatFormField, MatLabel } from '@angular/material/input';
  import { MatIcon } from '@angular/material/icon';
  import { MatDivider } from '@angular/material/divider';
import { CartService } from '../../core/services/cart-service';
import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-product-details',
    imports: [
      CurrencyPipe,
      MatButton,
      MatInput,
      MatIcon,
      MatFormField,
      MatLabel,
      MatDivider,
      FormsModule
  ],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css',
  })
  export class ProductDetails implements OnInit {
    private shopSerive = inject(ShopService)
    private activatedRoute = inject(ActivatedRoute)
    product?: Product   // >> the product currently being viewed (filled in after API call)
    private cartService = inject(CartService)

    quantityInCart = 0
    quantity = 1


    ngOnInit(): void {
    
      this.loadProduct()
    }

      loadProduct() {
        const id = this.activatedRoute.snapshot.paramMap.get('id') // >> This reads the :id part of the current URL. If the URL is /shop/7, then id = "7" (as a string).
        if (!id) return 
        this.shopSerive.getProduct(+id).subscribe({
          next: product => {
            this.product = product
            this.updateQuantityInBasket()
          },
          error:  error => console.log(error)

        })
      }

      updateQuantityInBasket() {
        this.quantityInCart = this.cartService.cart()?.items.find(item => item.productId === this.product?.id)?.quantity || 0
        this.quantity = this.quantityInCart || 1
      }




  // Compares typed `quantity` vs actual `quantityInCart`, and adds/removes
  // ONLY the difference (delta), since CartService methods are incremental,
  // not "set to this exact number."
      updateCart() {
        if (!this.product) return
        if (this.quantity > this.quantityInCart) {
          const itemsToAdd = this.quantity - this.quantityInCart
          this.quantityInCart += itemsToAdd
          this.cartService.addItemToCart(this.product, itemsToAdd)
        } else {
          const itemsToRemove = this.quantityInCart - this.quantity
          this.quantityInCart -= itemsToRemove
          this.cartService.removeItemFromCart(this.product.id, itemsToRemove)
        }
      }

      getButtonText() {
        return this.quantityInCart > 0 ? 'Update Cart' : 'Add to Cart'
      }




  }
