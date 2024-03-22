import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CourierService } from 'src/app/Services/courier.service';
import { DeleteComponent } from 'src/app/delete/delete.component';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  IsLoading:boolean = false
  ngOnInit(): void {
   this.getAllRoute()
  }
  constructor(private courierService : CourierService,private dialog:MatDialog){}
  dataRoute:any[]
  isCreateNew:boolean = false
  CreateRoute: FormControl = new FormControl(null, [Validators.required]);

  toggleisCreateNew(){
    this.isCreateNew = !this.isCreateNew
  }
  getAllRoute()
  {
    this.courierService.getAllRoute()
    .subscribe
    ({
      next: (res)=>
      {
        this.dataRoute = res
      }
    })
  }

  onCreate(){
   if(this.CreateRoute.hasError('required')){

   }
   else{
    this.IsLoading = true
    this.courierService.createRoute(this.CreateRoute.value).subscribe({
      next:(res)=>{
        this.IsLoading = false
        this.isCreateNew = false;
        this.getAllRoute();
        this.CreateRoute.patchValue(null);
      }
     })
   }
  }

  openDeleteDialog(id:any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      height: '',
      width: '350px',

      data:{
        id:id
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAllRoute()
    });
  }
}
