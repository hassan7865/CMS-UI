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

  postCustomer(dataCustomer:any):Observable<any>
  {
    return this.http.post(`${environment.BASEURL}/Vendor/CreateVendor`,
    {
      ... dataCustomer
    })
  }

  getCustomerById(id:number): Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Vendor/Get-Vendor/${id}`)
  }

  deleteCustomer(id:any): Observable<any>
  {
    return this.http.delete(`${environment.BASEURL}/Vendor/DeleteVendor/${id}`)
  }

  updateCustomer(id:any, dataCustomer:any): Observable<any>
  {
    return this.http.put(`${environment.BASEURL}/Vendor/UpdateVendor/${id}`, {
      ... dataCustomer
    })
  }
}
