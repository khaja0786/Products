import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { MatDialog } from '@angular/material/dialog';
import { AddorderComponent } from 'src/app/orders/addorder/addorder.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;

  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialog) { }



  openDialog() {
    this.dialogRef.open(CreateComponent);
  }

  openDialogg() {
    this.dialogRef.open(AddorderComponent)
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      console.log(this.products);
    });
    {
      this.loading = true;
      this.productService.getAll().subscribe((data: Product[]) => {
        this.loading = false;
        this.products = data;
        console.log(this.products);
      });
    }
  }
}

