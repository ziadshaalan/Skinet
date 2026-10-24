import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminOrders } from './admin-orders/admin-orders';
import { AdminCatalog } from './admin-catalog/admin-catalog';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatTabsModule,
    AdminOrders,
    AdminCatalog
],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}

