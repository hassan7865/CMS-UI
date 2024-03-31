import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CourierService } from 'src/app/Services/courier.service';
import { AddCourierComponent } from './add-courier/add-courier.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RouteComponent } from './route/route.component';
import { DeleteComponent } from 'src/app/delete/delete.component';
import { openSnackBar } from 'src/app/SnackBar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditCourierComponent } from './edit-courier/edit-courier.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss'],
  providers:[DialogService]
})
export class CourierComponent implements OnInit {

  IsLoading:boolean = false
  CourierData:any[]
  cols = [
    { field: 'Name', header: 'Name' },
    { field: 'RouteName', header: 'Route Name' },
    { field: 'PhoneNumber', header: 'Phone' },
    { field: 'Email', header: 'Email' },
];
 ref: DynamicDialogRef | undefined;

  constructor(private courierservice: CourierService,
    private dialog: MatDialog,
    public dialogService: DialogService
    ) {}
    visible: boolean = false;
  ngOnInit(): void {
    this.getAllCourier()
   
  }
    getAllCourier() 
    {
      this.IsLoading = true
      this.courierservice.getAllCouriers()
      .subscribe(
        {
          next : (res) =>
          {
            this.IsLoading = false
            this.CourierData = res;
            console.log(res)
          } 
        }
      )
    }

    openAddcourier(){
      this.ref = this.dialogService.open(AddCourierComponent, {
        header: 'Create Courier',
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
        data: { getCourier: this.getAllCourier.bind(this) }
    });
    }

    openRoute()
    {
      const dialogRef = this.dialog.open(RouteComponent, {
        width: "45%",
      })
    }

    openUpdate(id:any)
    {
      this.ref = this.dialogService.open(EditCourierComponent, {
        header: 'Update Courier',
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
        data: { 
          id:id,
          getCourier: this.getAllCourier.bind(this)
         }
    });
    }

    openDeleteDialog(id:any) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        height: '',
        width: '350px',
  
        data:{
          id:id,
          type:"courier",
          getAll:this.getAllCourier.bind(this)
        }
      })
    }
    
   
}
