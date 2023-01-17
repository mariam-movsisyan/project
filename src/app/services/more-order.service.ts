import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreOrderService {
  private orders: any

  constructor(private http: HttpClient) { }
  

  getOrders(){
    return this.http.get("/assets/json/orders.json").subscribe((order)=>{
     this.orders = order;
    })
  }
  getById(id: number){
    console.log(this.orders,'une');
    
    return this.orders.find((order: any) => order.id === id)
  }
}
