import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin-service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Order } from '../../shared/models/order';
import { OrderParams } from '../../shared/models/orderParams';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatLabel, MatSelect, MatFormField, MatSelectChange, MatOption } from '@angular/material/select';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'
import { DialogService } from '../../core/services/dialog-service';

@Component({
  selector: 'app-admin',
  imports: [
    MatTableModule,
    MatPaginator,
    MatIcon,
    MatSelect,
    DatePipe,
    CurrencyPipe,
    MatLabel,
    MatTooltip,
    MatTabsModule,
    RouterLink,
    MatFormField,
    MatOption,
    MatIconButton
],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  private adminService = inject(AdminService);
  private dialogService = inject(DialogService)
  displayedColumns: string[] = ['id', 'buyerEmail', 'orderDate', 'total', 'status', 'action'];
  dataSource = new MatTableDataSource<Order>([]);
  orderParams = new OrderParams();
  totalItems = 0;
  statusOptions = ['All', 'PaymentReceived', 'PaymentMismatch', 'Refunded', 'Pending']
  

  ngOnInit(): void {
    this.loadOrders()
  }


  loadOrders() {
    this.adminService.getOrders(this.orderParams).subscribe({
      next: response => {
        if (response.data) {
          this.dataSource.data = response.data
          this.totalItems = response.count
        }
      }
    })
  }

  onPageChange(event: PageEvent) {
    this.orderParams.pageNumber = event.pageIndex + 1
    this.orderParams.pageSize = event.pageSize
    this.loadOrders()
  }

  onFilterSelect(event: MatSelectChange) {
    this.orderParams.filter = event.value
    this.orderParams.pageNumber = 1
    this.loadOrders()
  }

  async openConfirmDialog(id: number) {
    const confirmed = await this.dialogService.confirm(
      'Confirm Refund',
      'Are you sure you want to refund this order?',
      'Refund'
    )

    if (confirmed) this.refundOrder(id)
  }



// Sends the refund request, then checks each order in the table against the selected order ID.
// If the IDs match, replace that order with the updated order returned by the API;
// otherwise, keep the existing order unchanged.
  refundOrder(id: number) {
    this.adminService.refundOrder(id).subscribe({
      next: order => {
        this.dataSource.data = this.dataSource.data.map(o => o.id === id ? order : o)
      }
    })
  }

}
