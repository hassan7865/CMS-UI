import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourierService } from '../Services/courier.service';
import { openSnackBar } from '../SnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    private courierService: CourierService,
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private matSnackBar : MatSnackBar
  ) {}

  Delete() {

    if(this.data.type === 'courier'){
      this.loading =true
      this.courierService.deleteCourier(this.data.id).subscribe({
        next:(res)=>{
          this.data.getAll()
          this.loading = false
          this.dialogRef.close()
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Courier has been Deleted!","success")
        },
        error:(err)=>{
          this.loading = false
          openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
          this.dialogRef.close()
        }
      });
    }

    else if(this.data.type === 'route'){
      this.loading =true
      this.courierService.deleteRoute(this.data.id).subscribe({
        next:(res)=>{
          this.data.getAll()
          this.loading = false
          this.dialogRef.close()
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Route has been Deleted!","success")
        },
        error:(err)=>{
          this.loading = false
          openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
          this.dialogRef.close()
        }
      });
    }

    else if (this.data.type === 'customer')
    {
      this.loading = true;
      this.customerService.deleteCustomer(this.data.id).subscribe(
        {
          next: (res)=>
          {
            this.data.getAll();
            this.loading = false;
            this.dialogRef.close();
            openSnackBar(this.matSnackBar, "Deleted Successfuly", "The selected Customer has been Deleted!","success");
          },
          error:(err)=>{
            this.loading = false
            openSnackBar(this.matSnackBar,"An Error Occured",err.error.message,"error")
            this.dialogRef.close()
          }
        }
      )
    }
  }
}
