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
import { LoaderComponent } from './loader/loader.component';
import { EditCourierComponent } from './courier/edit-courier/edit-courier.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AdminlayoutComponent,
    DasboardComponent,
    CourierComponent,
    AddCourierComponent,
    RouteComponent,
    LoaderComponent,
    EditCourierComponent,
    CustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    
   
  ],
  imports: [
    MatIconModule,
    DropdownModule,
    TableModule,
    SkeletonModule,
    DialogModule,
    ButtonModule,
    MatButtonModule,
    MatPaginatorModule,
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatDialogModule,
    DataTablesModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
