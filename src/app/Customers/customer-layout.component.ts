import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadShipmentsComponent } from './upload-shipments/upload-shipments.component';
@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})


export class CustomerLayoutComponent {
  constructor(private router:Router,private dialog : MatDialog) { }
  Logout(){
    localStorage.removeItem("login")
    this.router.navigate(['/'])
  }

  openUpload(){
    const dialogRef = this.dialog.open(UploadShipmentsComponent, {
      width: "45%",
    })}
}
