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

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
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

  constructor(private courierservice: CourierService,
    private dialog: MatDialog,) {}
    visible: boolean = false;
  ngOnInit(): void {
    this.getAllCourier()
   
  }
 

  showDialog() {
      this.visible = true;
  }

  onDialogVisibilityChange(visible: boolean) {
    this.visible = visible;
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

    openAddCourier()
    {
      const dialogRef = this.dialog.open(AddCourierComponent, {
        width: "45%",
        data:{
          getCourier:this.getAllCourier.bind(this)
        }
      })
    }

    openRoute()
    {
      const dialogRef = this.dialog.open(RouteComponent, {
        width: "45%",
      })
    }

    openUpdate(id:any)
    {
      const dialogRef = this.dialog.open(EditCourierComponent, {
        width: "45%",
        data:{
          id:id,
          getCourier:this.getAllCourier.bind(this)
        }
      })
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
