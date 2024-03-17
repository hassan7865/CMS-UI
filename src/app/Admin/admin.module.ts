import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdminlayoutComponent,
    DasboardComponent,
    UsersComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
