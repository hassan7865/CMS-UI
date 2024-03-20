import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CourierService } from 'src/app/Services/courier.service';
import { AddCourierComponent } from './add-courier/add-courier.component';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
})
export class CourierComponent implements OnInit {

  dtoptions: DataTables.Settings = {};
  dataCourier:any[]
  dtTrigger:Subject<any>=new Subject<any>();

    ngOnInit(): void {
      this.dtoptions = {
        pagingType : "full_numbers",
        searching: false, 
        lengthChange:false,
        language:{
        searchPlaceholder:'Text Customer'
    }

      }
      this.getAllCourier()
    }
    constructor(private courierservice: CourierService,
      private dialog: MatDialog) {}

    getAllCourier() 
    {
      this.courierservice.getAllCouriers()
      .subscribe(
        {
          next : (res) =>
          {
            this.dataCourier = res;
            console.log(res);
            this.dtTrigger.next(null);
          } 
        }
      )
    }

    openAddCourier()
    {
      this.dialog.open(AddCourierComponent, {
        height: "400px",
        width: "50%"
      })
    }

}
