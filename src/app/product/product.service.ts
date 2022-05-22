import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = "http://localhost:7071/api";


  httpOptions = {
headers:new HttpHeaders({
  'Content-Type': 'application/json'

})
  }
  find(id, productId): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL + '/GetProductById/' + id +'/' + productId)
    .pipe(
      catchError(this.errorHandler)
    )
    }

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/AllProducts' )
    .pipe( 
      catchError(this.errorHandler)
      )
  }
  create(product): Observable<Product[]> {
    return this.httpClient.post<Product[]>(this.apiURL + '/ProductCreate', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}

products(){
  return[
    {
      id:1,
      name:'year'
    },
    {
      
      id:2,

      name:'month'
    },
    // {
    //   id:3,
    //   name:'daily'
    // },
    // {
    //   id:4,
    //   name:'quartely'
    // }

    
  ]
}
productType(){
return[
  {
    id:1,
   name:'levis'
  },
  {
    id:1,
   name:'hrx'
  },
  {
    id:1,
   name:'lp'
  },
  {
    id:2,
   name:'lp'
  },
  {
    id:2,
   name:'levis'
  },
  {
    id:2,
   name:'roadster'
  }
]
}
}
