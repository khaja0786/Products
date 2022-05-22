import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ProductService } from 'src/app/product/product.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {CreateComponent } from 'src/app/product/create/create.component';
import { Product } from 'src/app/product/product';


@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  form: FormGroup;
  product:Product;
  public monthList:any[];
  public productlist:any[];
  products: any[];
  constructor(public ordersService: OrdersService,
              public productService: ProductService,
              private router: Router) { }
	

  ngOnInit() {
    // this.products=this.productService.products();
// console.log('mkj',this.productService.products())

    this.productService.getAll().subscribe((data: Product[])=>{
     
      this.products = data
      console.log('mmmmmm',this.products);
  })

    this.form = new FormGroup({
    orderid : new FormControl('', [Validators.required]),
    
    producttype: new FormControl('', Validators.required),
      productname: new FormControl('',Validators.required),
      productprice: new FormControl('',Validators.required)
    });
     }
  
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.ordersService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('product/index');
         confirm("Record created successfully!");
    })
}

OnSelect(products){
  console.log("mainProducts",this.products)
 this.monthList=this.products.filter(d=>d.ProductType== products.target.value)
 console.log('monthlist',this.monthList)

}
}