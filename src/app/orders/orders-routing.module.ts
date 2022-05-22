import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [ { path: 'orders', redirectTo: 'orders/index', pathMatch: 'full'},
  { path: 'orders/index', component: IndexComponent },
  { path: 'orders/addorder', component: AddorderComponent },
  { path: 'orders/:id/:orderId/viewdetails', component: ViewdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
