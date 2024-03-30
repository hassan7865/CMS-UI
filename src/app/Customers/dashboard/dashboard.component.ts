import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  shipments = [
    { name: "Test Ali",id: "DD33443", phone: '123-456-7890' },
    { name: "Test Mohsin",id: "DD33443", phone: '234-567-8901' },
    { name: "Test Hassan",id: "DD33443", phone: '345-678-9012' },
    
    // Add more shipment data as needed
  ];
  selectedShipment: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectShipment(shipment: any) {
    this.selectedShipment = shipment;
  }
}
