import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourierService } from 'src/app/Services/courier.service';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { openSnackBar } from 'src/app/SnackBar';
@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit {

  ngOnInit(): void {
    this.getAllRoute()
    this.CreateCourierForm = new FormGroup({
      Name: new FormControl(null,Validators.required),
      userName: new FormControl(null, Validators.required),
      email:new FormControl(null),
      Password: new FormControl(null, Validators.required),
      roleId: new FormControl(2, Validators.required),
      routeId:new FormControl(null, Validators.required)
    })
  }
  dataRoute:any[];
  IsLoading= false;
  CreateCourierForm:FormGroup;

  constructor(private loginService: LoginService ,private courierService: CourierService,
    private _snackBar: MatSnackBar,
   ){}
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

   
  closeDialog(){
    this.visible = false
    this.visibleChange.emit(this.visible);
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


  OnSubmit(){
    this.IsLoading = true
    this.loginService.CreateUser(this.CreateCourierForm.value).subscribe({
      next:(res)=>{
        this.CreateCourier(res.id)
      } ,
      error:(err)=>{
        this.IsLoading = false
        openSnackBar(this._snackBar,"An Error Occured",err.error.message,"error")
        console.log(err)
      }

    })
    
  }

  CreateCourier(userId:any){
    this.courierService.CreateCourier(this.CreateCourierForm.value,userId).subscribe({
      next:(res)=>{
        this.IsLoading = false
        this.closeDialog()
        openSnackBar(this._snackBar,"Created Successfully","Courier has been Created Successfully","success")
      },
      error:(err)=>{
        this.IsLoading = false
        openSnackBar(this._snackBar,"An Error Occured",err.error.message,"error")
      }
    })
  }
}

