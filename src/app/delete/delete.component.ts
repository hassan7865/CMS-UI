import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourierService } from '../Services/courier.service';
import { openSnackBar } from '../SnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';

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
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Courier has been Deleted!")
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
          openSnackBar(this.matSnackBar,"Deleted Successfully","The Selected Route has been Deleted!")
        }
      });
    }
  }
}
