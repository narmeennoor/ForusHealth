import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fg',
  templateUrl: './fg.component.html',
  styleUrls: ['./fg.component.css']
})
export class FgComponent {
  constructor(private router: Router) { }
  
  isActive1=false;
  isActive2=false;
  isActive3=false;
  isActive4=false;
  isActive5=false;
  isActive6=false;
  classicfgpage(){
    this.router.navigate(['classicfinishedgoods']);
  }
}
