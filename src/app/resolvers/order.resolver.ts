import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { Draft } from '../models/draft.model';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver implements Resolve<Order[] | Draft[]> {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.orderService.getOrders(route.data.draft);
  }
}
