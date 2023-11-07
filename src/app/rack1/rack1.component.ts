import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rack1',
  templateUrl: './rack1.component.html',
  styleUrls: ['./rack1.component.css']
})
export class Rack1Component {
  constructor(private router: Router) { }
  shelfs = [
    { id: 'shelf1', name: 'Shelf 1' },
    { id: 'shelf2', name: 'Shelf 2' },
    { id: 'shelf3', name: 'Shelf 3' },
    { id: 'shelf4', name: 'Shelf 4' }
  ];

  navigateToShelfPage(shelfId: string) {
    this.router.navigate(['/shelf', shelfId]);
  }
}
