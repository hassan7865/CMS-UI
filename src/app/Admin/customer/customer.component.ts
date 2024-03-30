import { AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { CustomerService } from './../../Services/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/delete/delete.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements  OnInit, AfterViewInit{


  // dataCustomer:any[];
  IsLoading:Boolean = false;

  displayedColumns: string[] = ['No.', 'Name', 'Email', 'Address', 'Edit', 'Delete'];
  dataCustomer= new MatTableDataSource<any[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit(): void {
    this.dataCustomer.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.getAllCustomer();
  }
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
  ){}


  getAllCustomer()
  {
    this.IsLoading = true;
    this.customerService.getAllCustomer()
    .subscribe({
      next: (res) =>
      {
        this.dataCustomer.data = res
        console.log(res);
        
        this.IsLoading = false;        
      },
      error: (err)=>
      {
        console.log("Error: ",err);
      }
    })
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(AddCustomerComponent, 
      {
        width:'50vw',
        height:'50',
        data: {
          getCustomer: this.getAllCustomer.bind(this)
        }
      })
  }

  deleteCustomer(id:any)
  {
    this.dialog.open(DeleteComponent,
      {
        width: '350px',
        data: {
          id: id,
          type:'customer',
          getAll: this.getAllCustomer.bind(this)
        }
      })
  }


  editCustomer(id:any)
  {
    this.dialog.open(EditCustomerComponent,
      {
        width:'50vw',
        height: '80vh',
        data:
        {
          Id: id,
          GetAllCustomer: this.getAllCustomer.bind(this)
        }
      })
  }

}
