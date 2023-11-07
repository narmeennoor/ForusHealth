import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rack2',
  templateUrl: './rack2.component.html',
  styleUrls: ['./rack2.component.css']
})
export class Rack2Component {
  constructor(private router: Router) { }
  shelfs1 = [
    { id: 'shelf1', name: 'Shelf 1' },
    { id: 'shelf2', name: 'Shelf 2' },
    { id: 'shelf3', name: 'Shelf 3' },
    { id: 'shelf4', name: 'Shelf 4' }
  ];

  navigateToShelfPage(shelfId: string) {
    this.router.navigate(['rack2/', shelfId]);
  }
  

}
