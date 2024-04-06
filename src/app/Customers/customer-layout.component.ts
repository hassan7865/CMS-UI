import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadShipmentsComponent } from './upload-shipments/upload-shipments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss'],
  providers:[DialogService]
})


export class CustomerLayoutComponent {
  ref: DynamicDialogRef | undefined;
  constructor(private router: Router,
    public dialogService: DialogService
  ) { }
  Logout() {
    localStorage.removeItem("login")
    this.router.navigate(['/'])
  }

  openUpload() {
    this.ref = this.dialogService.open(UploadShipmentsComponent, {
      header: 'Add File',
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
    })
  }

}
