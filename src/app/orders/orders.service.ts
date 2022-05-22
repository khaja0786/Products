import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Orders } from './orders';
import { Product } from 'src/app/product/product'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private apiURL = "http://localhost:7071/api";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private httpClient: HttpClient) { }
getAll(): Observable<Orders[]> {
  return this.httpClient.get<Orders[]>(this.apiURL + '/AllOrders' )
  .pipe( 
    catchError(this.errorHandler)
    )
}
getAllProducts(productname): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/AllProducts' + productname )
    .pipe( 
      catchError(this.errorHandler)
      )
  }
create(orders): Observable<Orders[]> {
  return this.httpClient.post<Orders[]>(this.apiURL + '/OrderCreate', JSON.stringify(orders), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
} 

find(Id, OrderId): Observable<Orders> {
  return this.httpClient.get<Orders>(this.apiURL + '/GetOrderById/' + Id +'/' + OrderId)
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
}

