import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
   CustomerLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatToolbarModule
    
  ]
})
export class CustomersModule { }
