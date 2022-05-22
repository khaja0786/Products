import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  
  orders:Orders;
  orderId: string;
  id:string;

  constructor(
    public ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderId = this.route.snapshot.params['orderId'];

this.ordersService.find(this.id,this.orderId).subscribe((data: Orders)=>{
  console.log('data#', data);
      this.orders=data;
  });
}
}