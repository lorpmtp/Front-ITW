import { Draft } from './../models/draft.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private apiService: ApiService
  ) {}

  public getOrders(drafts: boolean): Observable<Order[] | Draft[]> {
    return this.apiService.get().pipe(
      map(res => drafts ? res.drafts : res.orders)
    );
  }

  public getOrderById(orderId: string, drafts: boolean): Observable<Order | Draft> {
    return this.apiService.get().pipe(
      map(res => res[drafts ? 'drafts' : 'orders'].find(order => order.id === orderId))
    );
  }
}
