import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderService } from '../../../services/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Order[];
  draft: boolean;

  constructor(
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.orderList = data.orderList;
      this.draft = data.draft;
    });
  }

}
