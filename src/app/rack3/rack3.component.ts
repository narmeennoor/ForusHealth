import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rack3',
  templateUrl: './rack3.component.html',
  styleUrls: ['./rack3.component.css']
})
export class Rack3Component {
  constructor(private router: Router) { }
  shelfs3 = [
    { id: 'shelf1', name: 'Shelf 1' },
    { id: 'shelf2', name: 'Shelf 2' },
    { id: 'shelf3', name: 'Shelf 3' },
    { id: 'shelf4', name: 'Shelf 4' }
  ];

  navigateToShelfPage(shelfId3: string) {
    this.router.navigate(['rack3/', shelfId3]);
  }

}
