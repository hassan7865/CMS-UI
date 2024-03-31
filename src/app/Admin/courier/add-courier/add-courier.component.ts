import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourierService } from 'src/app/Services/courier.service';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { openSnackBar } from 'src/app/SnackBar';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit {

  ngOnInit(): void {
    this.getAllRoute()
    this.CreateCourierForm = new FormGroup({
      courierName: new FormControl(null,Validators.required),
      username: new FormControl(null, Validators.required),
      password:new FormControl(null,Validators.required),
      email: new FormControl(null),
      routeId: new FormControl(2, Validators.required),
      phoneNumber:new FormControl(null, Validators.required)
    })
  }
  dataRoute:any[];
  IsLoading= false;
  CreateCourierForm:FormGroup;

  constructor(private loginService: LoginService ,private courierService: CourierService,
    private _snackBar: MatSnackBar,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig
   ){}
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


 

  CreateCourier(){
    this.IsLoading = true
    this.courierService.CreateCourier(this.CreateCourierForm.value).subscribe({
      next:(res)=>{
        this.IsLoading = false
        this.ref.close()
        this.config.data.getCourier()
        openSnackBar(this._snackBar,"Created Successfully","Courier has been Created Successfully","success")
      },
      error:(err)=>{
        this.IsLoading = false
        this.ref.close()
        openSnackBar(this._snackBar,"An Error Occured",err.error.message,"error")
      }
    })
  }
}

