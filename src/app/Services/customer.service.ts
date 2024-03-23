import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getAllCustomer(): Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Vendor/GetVendors`);
  }
}
