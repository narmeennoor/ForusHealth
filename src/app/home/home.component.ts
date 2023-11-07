import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  isActiveRaw = false;
  isActiveFinished=false;


  rawmaterial() {
    this.router.navigate(['/rawmaterial']);
  }
  finishedgoods(){
    this.router.navigate(['/finishedgoods']);
  }
}
