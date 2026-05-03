import { Component, inject, OnInit, Pipe } from '@angular/core';
import { ShopService } from '../../core/services/shop-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatInput, MatFormField, MatLabel } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

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
],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private shopSerive = inject(ShopService)
  private activatedRoute = inject(ActivatedRoute)
  product?: Product


  ngOnInit(): void {
  
    this.loadProduct()
  }

    loadProduct() {
      const id = this.activatedRoute.snapshot.paramMap.get('id')
      if (!id) return 
      this.shopSerive.getProduct(+id).subscribe({
        next: product => this.product = product,
        error:  error => console.log(error)

      })
    }


}
