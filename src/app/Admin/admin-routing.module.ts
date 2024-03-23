import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminlayoutComponent } from './adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CourierComponent } from './courier/courier.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: "",
    component: AdminlayoutComponent,
    children: [
      { path: "dashboard", component: DasboardComponent },
      {path:"users",component:CourierComponent},
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {path: "customer", component: CustomerComponent}
    ]
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
