import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shelf1',
  templateUrl: './shelf1.component.html',
  styleUrls: ['./shelf1.component.css']
})
export class Shelf1Component {
  constructor(private router: Router) { }
  Bins = [
    { id: 'Bin1', name: 'Bin 1' },
    { id: 'Bin2', name: 'Bin 2' },
    { id: 'Bin3', name: 'Bin 3' },
    { id: 'Bin4', name: 'Bin 4' }
  ];

  navigateToBinPage(BinId: string) {
    this.router.navigate(['/Bin', BinId]);
  }
}
