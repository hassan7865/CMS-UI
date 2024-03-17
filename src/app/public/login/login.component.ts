import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  IsLoading:boolean = false
  error:any;
  LoginForm : FormGroup;

  constructor(private LoginService : LoginService,private router : Router){}
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required)
    })
  }

  OnLogin(){
    this.IsLoading = true
    this.LoginService.Login(this.LoginForm.value).subscribe({
      next:(res)=>{
        this.IsLoading = false
        localStorage.setItem('login', JSON.stringify(res))
        this.router.navigate(['/admin/dashboard'])
      },
      error:(error)=>{
        this.IsLoading = false
        this.error = error
        
      }
    })
  }
}
