import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoreOrderService } from '../services/more-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders!: any
  public post: any
  constructor(private moreOrderService: MoreOrderService,
    private route: ActivatedRoute) {
    this.orders = moreOrderService.aboutOrders
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
    this.post = this.moreOrderService.getById(params?.['id'])
      
    })
  }

}
