import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerLayoutComponent } from './customer-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadShipmentsComponent } from './upload-shipments/upload-shipments.component';
import {MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   CustomerLayoutComponent,
   UploadShipmentsComponent,
   DashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CustomersRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule

    
  ]
})
export class CustomersModule { }
