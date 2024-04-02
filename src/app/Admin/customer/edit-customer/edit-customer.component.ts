import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from 'src/app/Services/customer.service';
import { DialogRef } from '@angular/cdk/dialog';
import { openSnackBar } from 'src/app/SnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'jquery';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit{

  IsLoading:Boolean= false;
  IsLoadingUpdate:Boolean= false;
  dataCustomer:any;
  UpdateCustomerForm: FormGroup;


  ngOnInit(): void {
    this.getCustomerById()
    this.UpdateCustomerForm = new FormGroup(
      {
        VendorName: new FormControl(null, Validators.required),
        VendorEmail: new FormControl(null, Validators.required),
        VendorAddress: new FormControl(null, Validators.required),
        UserName: new FormControl(null, Validators.required),
        PhoneNumber: new FormControl (null, Validators.required)
      }
    )

  }

  constructor(
    private customerService : CustomerService,
    private _snackBar: MatSnackBar,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ){}


  getCustomerById()
  {
    console.log(this.config.data.Id);
    
    this.IsLoadingUpdate = true;
    this.customerService.getCustomerById(this.config.data.Id).subscribe(
      {
        next: (res)=>
        {
          this.dataCustomer = res
          console.log(res);
          this.UpdateCustomerForm.patchValue({
            VendorName : res.vendorName,
            VendorEmail: res.vendorEmail,
            VendorAddress: res.vendorAddress,
            UserName: res.userName,
            PhoneNumber: res.phoneNumber
          })
          this.IsLoadingUpdate = false;
        }
        
      }
    )
    
    
  }


  UpdateCustomer()
  {
    this.IsLoading = true;
    this.customerService.updateCustomer(this.config.data.Id, this.UpdateCustomerForm.value)
    .subscribe({
      next: (res)=>
      {
        this.IsLoading = false;
        this.ref.close()
        this.config.data.getAll();
        openSnackBar(this._snackBar,"Updated Successfully","Customer has been Updated Successfully","success")
      },
      error: (err) =>
      {
        openSnackBar(this._snackBar,"Error Occured",err.error,"error")
      }
    })
  }
}
