import { Component, Inject } from '@angular/core';
import { CourierService } from '../Services/courier.service';
import { openSnackBar } from '../SnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../Services/customer.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  loading: boolean = false;

  constructor(
    public ref : DynamicDialogRef,
    public config: DynamicDialogConfig,
    private courierService: CourierService,
    private customerService: CustomerService,
    private matSnackBar : MatSnackBar
  ) {}

  Delete() {

    if(this.config.data.type === 'courier'){
      this.loading =true
      this.courierService.deleteCourier(this.config.data.id).subscribe({
        next:(res)=>{
          this.config.data.getAll()
          this.loading = false
          this.ref.close()
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Courier has been Deleted!","success")
        },
        error:(err)=>{
          this.loading = false
          openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
          this.ref.close()
        }
      });
    }

    else if(this.config.data.type === 'route'){
      this.loading =true
      this.courierService.deleteRoute(this.config.data.id).subscribe({
        next:(res)=>{
          this.config.data.getAll()
          this.loading = false
          this.ref.close()
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Route has been Deleted!","success")
        },
        error:(err)=>{
          this.loading = false
          openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
          this.ref.close()
        }
      });
    }

    else if (this.config.data.type === 'customer')
    {
      this.loading = true;
      this.customerService.deleteCustomer(this.config.data.id).subscribe(
        {
          next: (res)=>
          {
            this.config.data.getAll();
            this.loading = false;
            this.ref.close();
            openSnackBar(this.matSnackBar, "Deleted Successfuly", "The selected Customer has been Deleted!","success");
          },
          error:(err)=>{
            this.loading = false
            console.log(err);
            
            openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
            this.ref.close()
          }
        }
      )
    }
  }
}
