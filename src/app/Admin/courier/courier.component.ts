import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CourierService } from 'src/app/Services/courier.service';
import { AddCourierComponent } from './add-courier/add-courier.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RouteComponent } from './route/route.component';
import { DeleteComponent } from 'src/app/delete/delete.component';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
})
export class CourierComponent implements AfterViewInit {

  dataCourier = new MatTableDataSource<any[]>();
  displayedColumns: string[] = ['No', 'Name', 'RouteId','edit','delete','view'];

  constructor(private courierservice: CourierService,
    private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataCourier.paginator = this.paginator;
    this.getAllCourier()

  }
   
    getAllCourier() 
    {
      this.courierservice.getAllCouriers()
      .subscribe(
        {
          next : (res) =>
          {
            this.dataCourier.data = res;
            console.log(res);
          } 
        }
      )
    }

    openAddCourier()
    {
      const dialogRef = this.dialog.open(AddCourierComponent, {
        width: "45%",
      })
      dialogRef.afterClosed().subscribe(result => {
        this.getAllCourier()
      });
    }

    openRoute()
    {
      const dialogRef = this.dialog.open(RouteComponent, {
        width: "45%",
      })
    }

    openDeleteDialog(id:any) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        height: '',
        width: '350px',
  
        data:{
          id:id,
          type:"courier"
        }
      })
      dialogRef.afterClosed().subscribe(result => {
        this.getAllCourier()
      });
    }
}
