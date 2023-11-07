import { Component } from '@angular/core';

@Component({
  selector: 'app-bincard',
  templateUrl: './bincard.component.html',
  styleUrls: ['./bincard.component.css']
})
export class BincardComponent {
  
  displayedColumns: string[] = ['Date','Previous Balance', 'Received', 'Issued', 'balance','remarks'];
  dataSource: any[] = [
    // First row with data
    {
      Date: '16/08/22',
      'Previous Balance': 90,
      Received: 0,
      Issued: 10,
      balance: 80,
      remarks: 'B-39',
    },
    // Empty rows (adjust the number of empty rows as needed)
    {},
    {},
  ];
}