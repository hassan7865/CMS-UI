import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
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
    public config: DynamicDialogConfig,
    private snackBar : MatSnackBar,
    private ref : DynamicDialogRef,
    private _snackBar : MatSnackBar
  ) {}
  UpdateCourierForm: FormGroup;
  IsLoading: boolean = false; 
  IsLoadingUpdate: boolean = false;
  dataRoute: any[];
  ngOnInit(): void {
    this.UpdateCourierForm = new FormGroup({
      // CourierName: new FormControl(null, Validators.required),
      // Username: new FormControl(null, Validators.required),
      // Email: new FormControl(null),
      // RouteId: new FormControl(null, Validators.required),
      // PhoneNumber: new FormControl(null, Validators.required)
      courierName: new FormControl(null,Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      routeId: new FormControl(2, Validators.required),
      phoneNumber:new FormControl(null, Validators.required)
    });

    this.getCourier();
    this.getAllRoute();
  }

  getCourier() {
    this.IsLoadingUpdate = true;
    this.courierService.getCourierById(this.config.data.id).subscribe({
      next: (res) => {
        console.log(res)
        this.UpdateCourierForm.patchValue({
          courierName: res.courierName,
          username: res.username,
          email: res.email,
          routeId: res.routeId,
          phoneNumber: res.phoneNumber
        });

        this.IsLoadingUpdate = false;
      },
    });
  }

  getAllRoute() {
    this.courierService.getAllRoute().subscribe({
      next: (res) => {
        this.dataRoute = res;
        console.log(res);
        
      },
    });
  }

  OnUpdate() {
    this.IsLoading = true;
    this.courierService
      .UpdateCourier(this.config.data.id, this.UpdateCourierForm.value)
      .subscribe({
        next: (res) => {
          this.config.data.getCourier()
          this.IsLoading = false;
          this.ref.close()
          openSnackBar(this.snackBar,"Updated Successfully","The Selected Courier has been Updated!","success");
        },
        error:(err)=>{
          this.IsLoading = false
          this.ref.close()
          console.log(err);
          
          openSnackBar(this._snackBar,"An Error Occured",err.Message,"error")
        }
      });
  }
}
