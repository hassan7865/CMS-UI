import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-upload-shipments',
  templateUrl: './upload-shipments.component.html',
  styleUrls: ['./upload-shipments.component.scss']
})
export class UploadShipmentsComponent {


  shipmentData:any[]
  selected:any[]
  selectedAll: boolean = false;
  parseExcelFile(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const shipmentData = XLSX.utils.sheet_to_json(worksheet, { header: 0 });
        console.log(shipmentData);
        resolve(shipmentData);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsBinaryString(file);
    });
  }
  

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.parseExcelFile(file)
        .then((shipmentData: any[]) => {
          this.shipmentData = [...shipmentData];
          console.log(this.shipmentData);
        })
        .catch((error) => {
          console.error('Error parsing Excel file:', error);
        });
    }
  }

  isChecked(record:string): boolean {
    return this.selected.includes(record);
  }
  toggleSelection(record: any): void {
    const index = this.selected.indexOf(record);
    if (index === -1) {
      this.selected.push(record);
    } else {
      this.selected.splice(index, 1);
    }
  }

  toggleSelectAll() {
    this.selectedAll = !this.selectedAll;
    if (this.selectedAll) {
      this.selected = [...this.shipmentData];
    } else {
      this.selected = [];
    }
  }

}
