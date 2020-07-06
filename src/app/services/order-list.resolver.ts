import { Observable } from 'rxjs';
import { OrderService } from './order.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable()
export class OrderListResolver implements Resolve<any> {

     constructor(private orderService: OrderService) {}

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
          return this.orderService.getOrderById(route.params['orderId']);
     }

}