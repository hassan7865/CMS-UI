import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {}

  Login(UserLoginData:any):Observable<any>{
    return this.http.post(`${environment.BASEURL}/User/Login-User`,{...UserLoginData})
  }
}
