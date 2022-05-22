import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { OrdersService } from 'src/app/orders/orders.service';
import {Product} from '../product';
//import {Orders} from 'src/app/orders/orders';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
 product: Product;
  constructor(public productsService: ProductService,
    public orderService: OrdersService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      //  id : new FormControl('', [Validators.required]),
        productid : new FormControl('', [Validators.required,Validators.pattern('[0-9]{1,6}')]),
        productname: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$")]),
        producttype:new FormControl('',Validators.required)
      });
    }
    
    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value);
      this.productsService.create(this.form.value).subscribe(res => {
           console.log('Post created successfully!');
           this.router.navigateByUrl('product/index');
           confirm("Record Created successfully!")
           window.location.reload();
  
      })
  }
  }
  


