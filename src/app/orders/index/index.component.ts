import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Orders } from '../orders';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddorderComponent } from '../addorder/addorder.component';
import { CreateComponent } from 'src/app/product/create/create.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  orders: Orders[] = [];
  loading: boolean = false;

  constructor(public ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef : MatDialog) { }

    openDialog(){
      this.dialogRef.open(CreateComponent);
    }
    
    openDialogg(){
      this.dialogRef.open(AddorderComponent)
    }

  ngOnInit(): void {
this.ordersService.getAll().subscribe((data: Orders[])=>{
      this.orders = data;
      console.log(this.orders);
  });
  {
    this.loading = true;
    this.ordersService.getAll().subscribe((data:Orders[])=>{
      this.loading = false;
          this.orders = data;
          console.log(this.orders);
      });
     }
}

}