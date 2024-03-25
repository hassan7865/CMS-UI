import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }


  getAllCustomer(): Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Vendor/GetVendors`);
  }

  postCustomer(dataCustomer):Observable<any>
  {
    return this.http.post(`${environment.BASEURL}/Vendor/CreateVendor`,
    {

    })
  }

  getCustomerById(id:number): Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Vendor/Get-Vendor/${id}`)
  }
}
