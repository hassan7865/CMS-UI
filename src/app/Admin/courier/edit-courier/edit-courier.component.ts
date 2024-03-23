import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourierService } from 'src/app/Services/courier.service';

@Component({
  selector: 'app-edit-courier',
  templateUrl: './edit-courier.component.html',
  styleUrls: ['./edit-courier.component.scss']
})
export class EditCourierComponent implements OnInit {
 
  constructor(private courierService : CourierService, @Inject(MAT_DIALOG_DATA) private data: any,){}
  UpdateCourierForm:FormGroup
  IsLoading:boolean = false
  IsLoadingUpdate:boolean = false
  dataRoute:any[]
  ngOnInit(): void {
    this.UpdateCourierForm = new FormGroup({
      Name: new FormControl(null,Validators.required),
      userName: new FormControl(null, Validators.required),
      email:new FormControl(null),
      roleId: new FormControl(2, Validators.required),
      routeId:new FormControl(null, Validators.required)
    })

    this.getCourier()
    this.getAllRoute()
  }

  getCourier(){
    this.IsLoadingUpdate = true
    this.courierService.getCourierById(this.data.id).subscribe({
      next:(res)=>{
        this.UpdateCourierForm.patchValue({
          Name:res.Name,
          userName:res.courierName,
          email:res.email,
         roleId:res.roleId,
         routeId:res.routeId
        })

        this.IsLoadingUpdate = false
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
      
      }
    })
  }

  OnUpdate(){}
}

