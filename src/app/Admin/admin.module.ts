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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouteComponent } from './courier/route/route.component';
import { CustomerComponent } from './customer/customer.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AdminlayoutComponent,
    DasboardComponent,
    CourierComponent,
    AddCourierComponent,
    RouteComponent,
    CustomerComponent,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatDialogModule,
    DataTablesModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule
  ]
})
export class AdminModule { }
