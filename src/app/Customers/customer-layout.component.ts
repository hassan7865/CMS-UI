import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})


export class CustomerLayoutComponent {
  constructor(private router:Router) { }
  Logout(){
    localStorage.removeItem("login")
    this.router.navigate(['/'])
  }
}
