import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shipments = [
    { name: "Test Ali", id: "DD33443", phone: '123-456-7890' },
    { name: "Test Mohsin", id: "DD33443", phone: '234-567-8901' },
    { name: "Test Hassan", id: "DD33443", phone: '345-678-9012' },
  ];
  
  ngOnInit(): void {
    this.shipmentForm = new FormGroup({
      customerName:  new FormControl(null,Validators.required),
      customerPhone:  new FormControl(null,Validators.required),
      shipmentId:  new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required),
      weight:  new FormControl(null,Validators.required),
      address: new FormControl(null,Validators.required),
      vendorId:  new FormControl(null,Validators.required),
    });
  }
  IsLoading= false;
  shipmentForm: FormGroup;

  selectShipment(shipment: any) {
    this.shipmentForm.setValue(shipment); 
  }

}
