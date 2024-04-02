import { DialogRef } from '@angular/cdk/dialog';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CustomerService } from 'src/app/Services/customer.service';
import { LoginService } from 'src/app/Services/login.service';
import { openSnackBar } from 'src/app/SnackBar';
import { DeleteComponent } from 'src/app/delete/delete.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{

  createCustomerForm: FormGroup;
  IsLoading:Boolean=false;
  dataCustomer: any[]


  ngOnInit(): void {
    this.createCustomerForm = new FormGroup(
      {
        VendorName: new FormControl(null, Validators.required),
        VendorEmail: new FormControl(null, Validators.required),
        UserName: new FormControl(null, Validators.required),
        Password: new FormControl(null, Validators.required),
        VendorAddress: new FormControl(null, Validators.required),
        PhoneNumber: new FormControl (null, Validators.required)
      })

      
      }
      constructor( private customerService: CustomerService,
        private loginService: LoginService,
        private _snackBar: MatSnackBar,
        private config: DynamicDialogConfig,
        private ref: DynamicDialogRef


      ){}

        getAllCustomer()
        {
          this.customerService.getAllCustomer().subscribe({
            next: (res) =>
            {
              this.dataCustomer = res;
            }
          })
        }

        // onSubmit()
        // {
        //   this.IsLoading = true;
        //   console.log(this.createCustomerForm.value);
        //   this.loginService.CreateUser(this.createCustomerForm.value).
        //   subscribe({
        //     next: (res)=>{
        //       this.PostCustomer(res.id);
        //       this.IsLoading = false;
        //     }
        //   })
        // }



      PostCustomer()
      {
        this.IsLoading = true
        console.log(this.createCustomerForm.value);
        
        this.customerService.postCustomer(this.createCustomerForm.value).
        subscribe({
          next: (res) =>
          {
            this.config.data.getAll(),
            this.IsLoading = false;
            this.ref.close();
            openSnackBar(this._snackBar,"Created Successfully","Customer has been Created Successfully","success")
          },

          error:(err)=>{
            console.log(err);
            
            openSnackBar(this._snackBar,"Error Occured",err.Message,"error")
          }
        })
      }




}
