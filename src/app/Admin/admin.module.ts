import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CourierComponent } from './courier/courier.component';
import { DataTablesModule } from 'angular-datatables';
import { AddCourierComponent } from './courier/add-courier/add-courier.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminlayoutComponent,
    DasboardComponent,
    CourierComponent,
    AddCourierComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    AdminRoutingModule,
    DataTablesModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
