import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../shared/models/product';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TextInput } from '../../../shared/components/text-input/text-input';
import { TextArea } from '../../../shared/components/text-area/text-area';
import { ShopService } from '../../../core/services/shop-service';
import { SelectInput } from '../../../shared/components/select-input/select-input';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    TextInput,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    TextArea,
    SelectInput
],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnInit {
  productForm!: FormGroup;
  data = inject(MAT_DIALOG_DATA);
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<ProductForm>);
  shopService = inject(ShopService);

    ngOnInit(): void {
    this.initializeForm();
    setTimeout(() => {
      this.loadBrandsAndTypes();
    })
    if (this.data.product) {
      this.productForm.reset(this.data.product)
    }
  }

  loadBrandsAndTypes(): void {
    this.shopService.getBrands();
    this.shopService.getTypes();
  }

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      pictureUrl: ['', [Validators.required]],
      type: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      quantityInStock: [0, [Validators.required, Validators.min(0)]]
    });
  }

   onSubmit(): void {
    if (this.productForm.valid) {
      let product: Product = this.productForm.value;
      if (this.data.product) product.id = this.data.product.id;
      this.dialogRef.close({
        product
      })
    }
  }

  
}
