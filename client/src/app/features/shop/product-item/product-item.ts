import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatIcon } from "@angular/material/icon";
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    CurrencyPipe,
    MatAnchor
],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
//   @Input() is what opens the door for the parent to pass data in.
// Without it, [product]="product" in the parent would do nothing.
  @Input() product?: Product 
}
