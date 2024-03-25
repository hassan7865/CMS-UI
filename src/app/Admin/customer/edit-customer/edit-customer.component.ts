import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';

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
        vendorName: new FormControl(null, Validators.required),
        vendorEmail: new FormControl(null, Validators.required),
        vendorAddress: new FormControl(null, Validators.required),
      }
    )

  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private customerService : CustomerService
  ){}


  getCustomerById()
  {
    console.log(this.data.Id);
    
    this.IsLoadingUpdate = true;
    this.customerService.getCustomerById(this.data.Id).subscribe(
      {
        next: (res)=>
        {
          this.dataCustomer = res
          console.log(res);
          this.UpdateCustomerForm.patchValue({
            vendorName : res.vendorName,
            vendorEmail: res.vendorEmail,
            vendorAddress: res.vendorAddress
          })
          this.IsLoadingUpdate = false;
        }
        
      }
    )
    
    
  }
}
