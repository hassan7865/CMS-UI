import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CustomerService } from './../../Services/customer.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements  OnInit, AfterViewInit{


  // dataCustomer:any[];
  isLoading:Boolean = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataCustomer= new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit(): void {
    this.dataCustomer.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.getAllCustomer();
  }
  constructor(
    private customerService: CustomerService,

  ){}







  getAllCustomer()
  {
    this.isLoading = true;
    this.customerService.getAllCustomer()
    .subscribe({
      next: (res) =>
      {
        this.dataCustomer = res
        console.log(res);
        this.isLoading = false;        
      },
      error: (err)=>
      {
        console.log("Error: ",err);
      }
    })
  }

}
