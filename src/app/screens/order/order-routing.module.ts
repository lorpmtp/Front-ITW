import { OrderResolver } from './../../resolvers/order.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailResolver } from 'src/app/resolvers/order-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    resolve: {
      orderList: OrderResolver
    },
    data: {
      draft: false,
    }
  },
  {
    path: 'draft',
    component: OrderListComponent,
    pathMatch: 'full',
    resolve: {
      orderList: OrderResolver
    },
    data: {
      draft: true,
    }
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    pathMatch: 'full',
    resolve: {
      orderDetail: OrderDetailResolver
    },
    data: {
      draft: false,
    }
  },
  {
    path: 'draft/:orderId',
    component: OrderDetailComponent,
    resolve: {
      orderDetail: OrderDetailResolver
    },
    data: {
      draft: true,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
