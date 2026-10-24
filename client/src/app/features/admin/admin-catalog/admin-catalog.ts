import { Component, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../../../shared/models/product';
import { ShopParams } from '../../../shared/models/shopParams';
import { MatButtonModule } from '@angular/material/button';
import { CustomTable } from '../../../shared/components/custom-table/custom-table';
import { ShopService } from '../../../core/services/shop-service';
import { MatDialog } from '@angular/material/dialog';
import { ProductForm } from '../product-form/product-form';
import { AdminService } from '../../../core/services/admin-service';
import { firstValueFrom } from 'rxjs';
import { DialogService } from '../../../core/services/dialog-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-catalog',
  standalone: true,
  imports: [
    CustomTable,
    MatButtonModule
  ],
  templateUrl: './admin-catalog.html',
  styleUrl: './admin-catalog.css'
})
export class AdminCatalog {
  products: Product[] = [];
  private shopService = inject(ShopService)
  private dialog = inject(MatDialog);
  private adminService = inject(AdminService);
  private dialogService = inject(DialogService);
  private router = inject(Router);
  productParams = new ShopParams();
  totalItems = 0;

  columns = [
    { field: 'id', header: 'No.' },
    { field: 'name', header: 'Product name' },
    { field: 'type', header: 'Type' },
    { field: 'brand', header: 'Brand' },
    { field: 'quantityInStock', header: 'Quantity' },
    { field: 'price', header: 'Price', pipe: 'currency', pipeArgs: 'USD' }
  ];

  actions = [
    {
      label: 'Edit',
      icon: 'edit',
      tooltip: 'Edit product',
      color: 'rgba(16, 16, 191, 0.775)',
      action: (row: any) => {
        this.openEditDialog(row)
      }
    },
    {
      label: 'Delete',
      icon: 'delete',
      tooltip: 'Delete product',
      color: 'rgba(195, 8, 8, 0.944)',
      action: (row: any) => {
        this.openConfirmDialog(row.id)
      }
    },
    {
      label: 'Update quantity',
      icon: 'add_circle',
      tooltip: 'Update quantity in stock',
      color: '#2e7d32',
      action: (row: any) => {
        console.log(row)
      }
    },
    {
      label: 'View',
      icon: 'visibility',
      tooltip: 'View product',
      action: (row: any) => {
        this.router.navigateByUrl(`/shop/${row.id}`)
      }
    },
  ];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.shopService.getProducts(this.productParams).subscribe({
      next: response => {
        if (response.data) {
          this.products = response.data;
          this.totalItems = response.count;
        }
      }
    })
  }

  onPageChange(event: PageEvent) {
    this.productParams.pageNumber = event.pageIndex + 1;
    this.productParams.pageSize = event.pageSize;
    this.loadProducts();
  }

  openCreateDialog() {
    const dialog = this.dialog.open(ProductForm, {
      minWidth: '500px',
      data: {
        title: 'Create product'
      }
    });
    dialog.afterClosed().subscribe({
      next: async result => {
        if (result) {
          const product = await firstValueFrom(this.adminService.createProduct(result.product));
          if (product) {
            this.products.push(product);
          }
        }
      }
    })
  }

  openEditDialog(product: Product) {
    const dialog = this.dialog.open(ProductForm, {
      minWidth: '500px',
      data: {
        title: 'Edit product',
        product
      }
    })
    dialog.afterClosed().subscribe({
      next: async result => {
        if (result) {
          await firstValueFrom(this.adminService.updateProduct(result.product));
          const index = this.products.findIndex(p => p.id === result.product.id);
          if (index !== -1) {
            this.products[index] = result.product;
          }
        }
      }
    })
  }

  async openConfirmDialog(id: number) {
    const confirmed = await this.dialogService.confirm(
      'Confirm delete product',
      'Are you sure you want to delete this product? This cannot be undone',
      'Delete'
    );
    if (confirmed) this.onDelete(id);
  }

  onDelete(id: number) {
    this.adminService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(x => x.id !== id);
      }
    })
  }


}
