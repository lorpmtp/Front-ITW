import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListResolver } from 'src/app/services/order-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    resolve: {
      orderList: OrderListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
