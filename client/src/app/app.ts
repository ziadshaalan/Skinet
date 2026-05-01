import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Product } from './shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Pagination } from './shared/models/pagination';
import { ShopService } from './core/services/shop-service';
import { Shop } from './features/shop/shop';

// ngOnInit: lifecycle hook that runs after Angular finishes setting up the component
// "set up" means: class is instantiated → @Input() values are received from parent → ngOnInit runs
// safe place for API calls, reading @Input() values, and any initialization logic

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Shop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  // protected readonly title = signal('client');
  title = 'Skinet'
  }
