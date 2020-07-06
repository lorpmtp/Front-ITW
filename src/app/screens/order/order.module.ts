import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListResolver } from 'src/app/services/order-list.resolver';

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  providers: [OrderListResolver]
})
export class OrderModule { }
