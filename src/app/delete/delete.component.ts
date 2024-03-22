import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourierService } from '../Services/courier.service';

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
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  deleteRoute() {
    this.loading =true
    this.courierService.deleteRoute(this.data.id).subscribe({
      next:(res)=>{
        this.loading = false
        this.dialogRef.close()
      }
    });
  }
}
