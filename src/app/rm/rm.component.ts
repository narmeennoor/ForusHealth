import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.css']
})
export class RmComponent {
  constructor(private router: Router) { }
  
  isActive1=false;
  isActive2=false;
  isActive3=false;
  isActive4=false;
  isActive5=false;
  isActive6=false;
  classicpage(){
    this.router.navigate(['classic']);
  }
}
