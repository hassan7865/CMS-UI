import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourierService } from 'src/app/Services/courier.service';
import { openSnackBar } from 'src/app/SnackBar';

@Component({
  selector: 'app-edit-courier',
  templateUrl: './edit-courier.component.html',
  styleUrls: ['./edit-courier.component.scss'],
})
export class EditCourierComponent implements OnInit {
  constructor(
    private courierService: CourierService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private snackBar : MatSnackBar,
    private dialogRef : MatDialogRef<EditCourierComponent>,
    private _snackBar : MatSnackBar
  ) {}
  UpdateCourierForm: FormGroup;
  IsLoading: boolean = false;
  IsLoadingUpdate: boolean = false;
  dataRoute: any[];
  ngOnInit(): void {
    this.UpdateCourierForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null),
      routeId: new FormControl(null, Validators.required),
    });

    this.getCourier();
    this.getAllRoute();
  }

  getCourier() {
    this.IsLoadingUpdate = true;
    this.courierService.getCourierById(this.data.id).subscribe({
      next: (res) => {
        console.log(res)
        this.UpdateCourierForm.patchValue({
          Name: res.courierName,
          userName: res.username,
          email: res.email,
          routeId: res.routeId,
        });

        this.IsLoadingUpdate = false;
      },
    });
  }

  getAllRoute() {
    this.courierService.getAllRoute().subscribe({
      next: (res) => {
        this.dataRoute = res;
      },
    });
  }

  OnUpdate() {
    this.IsLoading = true;
    this.courierService
      .UpdateCourier(this.data.id, this.UpdateCourierForm.value)
      .subscribe({
        next: (res) => {
          this.data.getCourier()
          this.IsLoading = false;
          openSnackBar(this.snackBar,"Updated Successfully","The Selected Courier has been Updated!","success");
          this.dialogRef.close()
        },
        error:(err)=>{
          this.IsLoading = false
          openSnackBar(this._snackBar,"An Error Occured",err.Message,"error")
        }
      });
  }
}
