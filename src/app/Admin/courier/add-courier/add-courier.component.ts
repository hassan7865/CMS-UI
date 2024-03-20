import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.scss']
})
export class AddCourierComponent implements OnInit{

  ngOnInit(): void {
    this.getAllRole();
  }
  dataRole:any[];

  constructor(private loginService: LoginService){}

  getAllRole()
  {
    this.loginService.GetAllRole()
    .subscribe
    ({
      next: (res)=>
      {
        this.dataRole = res
        console.log(res);
      }
    })
  }
}
