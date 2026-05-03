import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from "@angular/material/icon";
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { ShopService } from '../../../core/services/shop-service';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    CurrencyPipe,
    MatAnchor,
    RouterLink
],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {

//   @Input() is what opens the door for the parent to pass data in.
// Without it, products?: Pagination<Product> in the parent would do nothing.
  @Input() product?: Product 
  shopService = inject(ShopService)

  
}
