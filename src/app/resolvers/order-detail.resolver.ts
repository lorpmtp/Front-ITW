import { Draft } from './../models/draft.model';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable()
export class OrderDetailResolver implements Resolve<any> {

     constructor(private orderService: OrderService) {}

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order | Draft> {
          return this.orderService.getOrderById(route.params.orderId, route.data.draft);
     }

}