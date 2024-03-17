import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './Guard/admin.guard';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { publicGuard } from './Guard/public.guard';

const routes: Routes = [
  {path:"admin",loadChildren:()=> import('./Admin/admin.module').then(m=> m.AdminModule),canActivate:[adminGuard]},
  {path:"",loadChildren:()=> import("./public/public.module").then(m=>m.PublicModule),canActivate:[publicGuard]},
  {path:"**",component:NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
