import { Component, inject, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Product } from '../../shared/models/product';
import { ShopService } from '../../core/services/shop-service';
import { ProductItem } from './product-item/product-item';
import { MatDialog } from '@angular/material/dialog';
import { FiltersDialog } from './filters-dialog/filters-dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatOption } from '@angular/material/autocomplete';
import { ShopParams } from '../../shared/models/shopParams';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pagination } from '../../shared/models/pagination';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
  //Products = signal<Product[]>([]);  ==> if signal used instead of zone 
// observable: a stream of data that is lazy — does nothing until you subscribe
    // .subscribe() is what triggers the actual API call and delivers the data
@Component({
  selector: 'app-shop',
  imports: [
    ProductItem,
    MatButton,
    MatIcon,
    MatMenu,
    MatSelectionList,
    MatListOption,
    MatMenuTrigger,
    MatPaginator,
    FormsModule
],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {


  private shopService = inject(ShopService)
  private dialogService = inject(MatDialog)
  products?: Pagination<Product>
  // MASTER variables — source of truth for active filters
  // selectedBrands: string[] = []
  // selectedTypes: string[] = []
// Track which one is currently active
  // selectedSort: string = 'name'   // default

  shopParams = new ShopParams()

  pageSizeOptions = [5,10,15,20]
  
  sortOptions = [   // An array of objects — each has a display name and an API value
    {name: 'Alphabetical', value: 'name'},
    {name: 'Low-High', value: 'priceAsc'},
    {name: 'High-Low', value: 'priceDesc'},

  ]
    
  ngOnInit(): void {
    this.initializeShop() 
  }

  initializeShop() {
    this.shopService.getBrands()
    this.shopService.getTypes()
    this.getProducts()
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => this.products = response,
      error: error => console.log(error),
    }) 
  }

  handlePageEvent(event: PageEvent) {
    this.shopParams.pageNumber = event.pageIndex + 1
    this.shopParams.pageSize = event.pageSize
    this.getProducts() 
}

private searchTerms = new Subject<string>()  // stream of keystrokes

  constructor() {
    // listen to the stream, wait 400ms of silence, then search
    this.searchTerms.pipe(
      debounceTime(400),
      takeUntilDestroyed()   // auto cleanup when component destroys
    ).subscribe(() => {
      this.shopParams.pageNumber = 1
      this.getProducts()
    })
  }

  onSearchChange() {
    this.searchTerms.next(this.shopParams.search)  // push keystroke into stream
}

  onSortChange(event: MatSelectionListChange) {
     // event.options = array of all changed options
    // [0] = first (and only, since multiple=false) changed option
    const selectedOption = event.options[0]
    if (selectedOption) {
      this.shopParams.sort = selectedOption.value
      this.shopParams.pageNumber = 1
      this.getProducts()

    }
  }

  openFiltersDialog() {
    // open dialog and pass current master selections as initial data
    const dialogRef = this.dialogService.open(FiltersDialog, {
      minWidth: '500px',  
      data: {
        selectedBrands: this.shopParams.brands,  // shop's current selections → sent into dialog
        selectedTypes: this.shopParams.types
      } 
    });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if(result){
          console.log(result)
           // result = object passed into close() from FiltersDialog
          // update master variables with user's selections
          this.shopParams.brands = result.selectedBrands
          this.shopParams.types= result.selectedTypes 
          this.shopParams.pageNumber = 1
         this.getProducts()

        }
      }
    })
  }
}
