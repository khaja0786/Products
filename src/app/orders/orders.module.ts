import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [IndexComponent,
       AddorderComponent,
       ViewdetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
