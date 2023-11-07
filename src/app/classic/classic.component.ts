import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent {
  constructor(private router: Router) { }
  racks = [
    { id: 'rack1', name: 'Rack 1' },
    { id: 'rack2', name: 'Rack 2' },
    { id: 'rack3', name: 'Rack 3' },
    { id: 'rack4', name: 'Rack 4' }
  ];


  // navigateToRackPage(rackId: string) {
  //   this.router.navigate(['/rack', rackId]);
  //   // Add navigation logic here based on the rackId
  // }
  navigateToRackPage(rackId: string) {
    this.router.navigate(['rack/' , rackId]); 
  }
  
}
