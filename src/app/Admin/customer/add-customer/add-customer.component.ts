import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/delete/delete.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{

  createCustomerForm: FormGroup;
  IsLoading:Boolean=false;


  ngOnInit(): void {
    this.createCustomerForm = new FormGroup(
      {
        VendorName: new FormControl(null, Validators.required),
        VendorEmail: new FormControl(null, Validators.required),
        VendorAddress: new FormControl(null, Validators.required)
      })
      }
      constructor(
      ){}




}
