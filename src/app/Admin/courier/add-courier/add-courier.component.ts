import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourierService } from 'src/app/Services/courier.service';

@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit{

  ngOnInit(): void {
    this.getAllRole();
    this.SubmitForm = new FormGroup({
      Cname: new FormControl('',Validators.required),
      userName: new FormControl('', Validators.required),
      email:new FormControl(''),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })
  }
  dataRole:any[];
  IsLoading= false;
  SubmitForm:FormGroup;

  constructor(private loginService: LoginService,
    private courierService: CourierService){}

  loginData = {};

  

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

  Submit()
  {
    this.IsLoading=true
    console.log(this.SubmitForm.value);
    console.log(this.SubmitForm.value.Cname);
    console.log(this.SubmitForm.value.email);
    console.log(this.SubmitForm.value.userName);
    console.log(this.SubmitForm.value.password);
    console.log(this.SubmitForm.value.role.roleId);
    console.log(this.SubmitForm.value.role.roleName);
    this.loginData = 
    {
      "UserName":this.SubmitForm.value.userName,
      "Password":this.SubmitForm.value.password,
      // "Email": this.SubmitForm.value.email,
      // "roleId": this.SubmitForm.value.role.roleId,

    }
    this.loginService.Login(this.loginData)
    .subscribe({
      next: (res) =>
      localStorage.setItem('login', JSON.stringify(res)),
        error: (err) => {
          console.error('Login failed:', err);
        }
    })
    this.courierService.postCourier({"CourierName": this.SubmitForm.value.Cname});
    this.IsLoading = false;
  }







}
