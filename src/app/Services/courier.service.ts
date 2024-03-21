import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class CourierService {



  constructor( private http: HttpClient) { }

  getAllCouriers() : Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Courier/GetCouriers`);
  }


  postCourier(data: any): Observable<any>
  {
    return this.http.post(`${environment.BASEURL}/PostCourier`, data);
  }
}
