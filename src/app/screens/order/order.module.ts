import { OrderDetailResolver } from './../../resolvers/order-detail.resolver';
import { OrderResolver } from './../../resolvers/order.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  providers: [OrderDetailResolver, OrderResolver]
})
export class OrderModule { }
