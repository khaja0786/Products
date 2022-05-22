import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:string;
  product:Product;
  productId: string;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.id = this.route.snapshot.params['id'];
this.productService.find(this.id,this.productId).subscribe((data: Product)=>{
  console.log('data#', data);
      this.product=data;
  });
}

  }

