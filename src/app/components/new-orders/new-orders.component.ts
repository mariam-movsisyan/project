import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {
  public orders!: any
  constructor(private orderService: OrdersService,
    private router: Router) { 
    this.orders = orderService.order
  }

  ngOnInit(): void {
  }
  public orderButton(id: number){
    this.router.navigate(['/order', id])
  }


}
