import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CourierService } from 'src/app/Services/courier.service';
import { openSnackBar } from 'src/app/SnackBar';
import { DeleteComponent } from 'src/app/delete/delete.component';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  IsLoading:boolean = false
  LoadingRoute:boolean = false
  ref: DynamicDialogRef | undefined;
  ngOnInit(): void {
   this.getAllRoute()
  }
  constructor(private courierService : CourierService,
  private dialogService: DialogService,

  private snackBar : MatSnackBar){}
  dataRoute:any[]
  isCreateNew:boolean = false
  CreateRoute: FormControl = new FormControl(null, [Validators.required]);

  toggleisCreateNew(){
    this.isCreateNew = !this.isCreateNew
  }
  getAllRoute()
  {
    this.LoadingRoute = true
    this.courierService.getAllRoute()
    .subscribe
    ({
      next: (res)=>
      {
        this.LoadingRoute = false
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
        openSnackBar(this.snackBar,"Created Successfully","The Route has been Created!","success")
      },
      error:(err)=>{
        this.IsLoading = false
        openSnackBar(this.snackBar,"An Error Occured",err.error.message,"error")
      }
     })
   }
  }

  openDeleteDialog(id:any) {
    this.ref = this.dialogService.open(DeleteComponent, {
      width: '30vw',
      // height: 'max-content',
      showHeader:false,
      modal:true,
      
      breakpoints: {
          '960px': '65vw',
          '640px': '90vw'
      },
      data: { 
        id:id,
        getAll: this.getAllRoute.bind(this),
        type:'route'
       }
  });

  }
}
