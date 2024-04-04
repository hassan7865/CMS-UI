import { AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { CustomerService } from './../../Services/customer.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { DeleteComponent } from 'src/app/delete/delete.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SortEvent } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements  OnInit{

  dataCustomer:any[]
  IsLoading:Boolean = false;



  ngOnInit(): void {
    this.getAllCustomer();
  }
  constructor(
    private customerService: CustomerService,
    public dialogService: DialogService

  ){}

  ref: DynamicDialogRef | undefined;





  getAllCustomer()
  {
    this.IsLoading = true;
    this.customerService.getAllCustomer()
    .subscribe({
      next: (res) =>
      {
        this.dataCustomer = res
        console.log(res);
        
        this.IsLoading = false;        
      },
      error: (err)=>
      {
        console.log("Error: ",err);
      }
    })
  }

  openDialog()
  {
    this.ref = this.dialogService.open(AddCustomerComponent, {
      // showHeader:false,
      header: 'Create Customer',
      width: '50vw',
      height: '100vh',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data:{
        getAll: this.getAllCustomer.bind(this)
      }
  });
    
  }

  deleteCustomer(id:any)
  {
    this.ref = this.dialogService.open(DeleteComponent,{
      width: '30vw',
      modal:true,
      breakpoints: {
        '960px': '65vw',
        '640px': '90vw'
      },
      data: {
        id:id,
        getAll: this.getAllCustomer.bind(this),
        type: 'customer'
      }
    })
    // this.dialog.open(DeleteComponent,
    //   {
    //     width: '350px',
    //     data: {
    //       id: id,
    //       type:'customer',
    //       getAll: this.getAllCustomer.bind(this)
    //     }
    //   })
  }


  editCustomer(id:any)
  { 
    console.log(id);
    
    this.ref = this.dialogService.open(EditCustomerComponent,{
      // showHeader:false,
      header:'Update Customer',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data: {
        Id:id,
        getAll: this.getAllCustomer.bind(this),
      }
    })
  }

}
