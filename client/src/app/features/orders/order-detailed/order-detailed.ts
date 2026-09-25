  import { Component, inject, OnInit } from '@angular/core';
  import { OrderService } from '../../../core/services/order-service';
  import { ActivatedRoute, Router, RouterLink } from '@angular/router';
  import { Order } from '../../../shared/models/order';
  import { MatCard } from '@angular/material/card';
  import { MatButton } from '@angular/material/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AddressPipe } from "../../../shared/pipes/address-pipe";
import { PaymentPipe } from "../../../shared/pipes/payment-pipe";
import { AdminService } from '../../../core/services/admin-service';
import { AccountService } from '../../../core/services/account-service';

  @Component({
    selector: 'app-order-detailed',
    imports: [
    MatCard,
    MatButton,
    DatePipe,
    CurrencyPipe,
    AddressPipe,
    PaymentPipe,
],
    templateUrl: './order-detailed.html',
    styleUrl: './order-detailed.css',
  })
  export class OrderDetailed implements OnInit {
    private orderService = inject(OrderService)
    private activatedRoute = inject(ActivatedRoute)
    private adminService = inject(AdminService)
    private accountService = inject(AccountService)
    private router = inject(Router)
    order?: Order
    buttonText = this.accountService.isAdmin() ? 'Return to admin' : 'Return to orders'


    ngOnInit(): void {
      this.loadOrder()
    }

  //   isAdmin() → true
  //  ├── buttonText → "Return to admin"
  //  └── on click → navigate to /admin
    onReturnClick() {
      this.accountService.isAdmin()
      ? this.router.navigateByUrl('/admin')
      : this.router.navigateByUrl('/orders')
    }


    loadOrder() {
      const id = this.activatedRoute.snapshot.paramMap.get('id')
      if (!id) return

      const loadOrderData = this.accountService.isAdmin()
        ? this.adminService.getOrder(+id)
        : this.orderService.GetOrderDetailed(+id)


      loadOrderData.subscribe({
        next: order => this.order = order
      })
    } 
  }
