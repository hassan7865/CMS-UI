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

  getAllRoute():Observable<any>{
   return this.http.get(`${environment.BASEURL}/Route/GetAllRoute`) 
  }

  CreateCourier(CreateCourierData):Observable<any>{
    return this.http.post(`${environment.BASEURL}/Courier/PostCourier`,{
      CourierName:CreateCourierData.Name,
      RouteId:CreateCourierData.routeId
    })
  }

  createRoute(routeName:any):Observable<any>{
    return this.http.post(`${environment.BASEURL}/Route/PostRoute`,{
      RouteName:routeName
    })
  }

  deleteRoute(routeId:any):Observable<any>{
    return this.http.delete(`${environment.BASEURL}/Route/DeleteRoute/${routeId}`)
  }
}
