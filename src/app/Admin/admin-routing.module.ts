import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminlayoutComponent } from './adminlayout.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    component: AdminlayoutComponent,
    children: [
      { path: "dashboard", component: DasboardComponent },
      {path:"users",component:UsersComponent},
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
