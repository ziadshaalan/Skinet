import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Product } from './shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Pagination } from './shared/models/pagination';
// ngOnInit: lifecycle hook that runs after Angular finishes setting up the component
// "set up" means: class is instantiated → @Input() values are received from parent → ngOnInit runs
// safe place for API calls, reading @Input() values, and any initialization logic

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // protected readonly title = signal('client');
  //Products = signal<Product[]>([]);  ==> if signal used instead of zone 
  baseUrl = 'https://localhost:5001/api/'
  private http = inject(HttpClient)
  title = 'Skinet'
  products: Product[] = []

    // observable: a stream of data that is lazy — does nothing until you subscribe
    // .subscribe() is what triggers the actual API call and delivers the data
  ngOnInit(): void {
    this.http.get<Pagination<Product>>(this.baseUrl + 'products').subscribe({
      //next: response => this.products.set(response.data)    -----Signal Case-----
      next: response => this.products = response.data,
      error: error => console.log(error),
      complete: () => console.log('complete')

      
    })
    
  }
}
