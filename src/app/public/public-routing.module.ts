import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"",component:PublicLayoutComponent,children:[
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path: "about-us", component: AboutUsComponent},
    {path: "services", component: ServicesComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
