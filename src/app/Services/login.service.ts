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

  GetAllRole(): Observable<any>
  {
    return this.http.get(`${environment.BASEURL}/Role/GetAllRole`);
  }

  CreateUser(CreateUserData:any):Observable<any>{
    return this.http.post(`${environment.BASEURL}/User/Create-User`,{
      UserName:CreateUserData.userName,
      FullName:CreateUserData.Name,
      Email:CreateUserData.email,
      Password:CreateUserData.Password,
      RoleId:CreateUserData.roleId,
      PhoneNumber: `${CreateUserData.phoneNumber}`
    })  
  }
}
