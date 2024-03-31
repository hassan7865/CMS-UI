import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CounterComponent } from './counter/counter.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    PublicLayoutComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CounterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    PublicRoutingModule,

  ]
})
export class PublicModule { }
