import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMainComponent } from './components/order-main/order-main.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OrderMainComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
