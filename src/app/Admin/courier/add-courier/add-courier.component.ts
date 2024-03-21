import { Component, Inject, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourierService } from 'src/app/Services/courier.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit{

  ngOnInit(): void {
    this.getAllRole();
    this.getAllRoute()
    this.CreateCourierForm = new FormGroup({
      Name: new FormControl(null,Validators.required),
      userName: new FormControl(null, Validators.required),
      email:new FormControl(null),
      Password: new FormControl(null, Validators.required),
      roleId: new FormControl(null, Validators.required),
      routeId:new FormControl(null, Validators.required)
    })
  }
  dataRole:any[];
  dataRoute:any[];
  IsLoading= false;
  CreateCourierForm:FormGroup;

  constructor(private loginService: LoginService,
    private courierService: CourierService,
    private dialogRef: MatDialogRef<AddCourierComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
    ){}

  getAllRole()
  {
    this.loginService.GetAllRole()
    .subscribe
    ({
      next: (res)=>
      {
        this.dataRole = res
        console.log(res);
      }
    })
  }

  getAllRoute()
  {
    this.courierService.getAllRoute()
    .subscribe
    ({
      next: (res)=>
      {
        this.dataRoute = res
        console.log(res);
      }
    })
  }

  OnSubmit(){
    this.IsLoading = true
    this.courierService.CreateCourier(this.CreateCourierForm.value).subscribe({
      next:(res)=>{
        this.CreateUser()

      }
    })
  }

  CreateUser(){
    this.loginService.CreateUser(this.CreateCourierForm.value).subscribe({
      next:(res)=>{
        this.IsLoading = false
        this.dialogRef.close()
      }
    })
  }
  }

