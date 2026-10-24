import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OrderParams } from '../../shared/models/orderParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Order } from '../../shared/models/order';
import { Pagination } from '../../shared/models/pagination';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = environment.apiUrl
  private http = inject(HttpClient)

  getOrders(OrderParams: OrderParams) {
    let params = new HttpParams()

    if (OrderParams.filter && OrderParams.filter !== 'All') {
      params = params.append('status', OrderParams.filter)
    }
    params = params.append('pageSize', OrderParams.pageSize)
    params = params.append('pageIndex', OrderParams.pageNumber)
    
    return this.http.get<Pagination<Order>>(this.baseUrl + 'admin/orders', {params})

  }

  getOrder(id: number) {
    return this.http.get<Order>(this.baseUrl + 'admin/orders/' + id )
  }

  refundOrder(id: number) {
    return this.http.post<Order>(this.baseUrl + 'admin/orders/refund/' + id, {})
  }

   createProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl + 'products', product);
  }

  updateProduct(product: Product) {
    return this.http.put(this.baseUrl + 'products/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + 'products/' + id);
  }

  updateStock(id: number, newQuantity: number) {
    return this.http.put(this.baseUrl + 'products/update-stock/' + id, newQuantity);
  }
  
}
