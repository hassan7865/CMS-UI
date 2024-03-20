import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
