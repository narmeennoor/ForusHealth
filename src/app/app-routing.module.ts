import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RmComponent } from './rm/rm.component';
import { FgComponent } from './fg/fg.component';
import { ClassicComponent } from './classic/classic.component';
import { Rack1Component } from './rack1/rack1.component';
import { Rack2Component } from './rack2/rack2.component';
import { Rack3Component } from './rack3/rack3.component';
import { Shelf1Component } from './shelf1/shelf1.component';
import { Rack2shelf2Component } from './rack2shelf2/rack2shelf2.component';
import { Rack3shelf3Component } from './rack3shelf3/rack3shelf3.component';
import { ClassicfgComponent } from './classicfg/classicfg.component';
import { BincardComponent } from './bincard/bincard.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'rawmaterial',component:RmComponent},
{path:'finishedgoods',component:FgComponent},
{path:'classic',component:ClassicComponent},
{ path: 'rack/rack4', component: Rack1Component },
{ path: 'rack/rack1', component: Rack1Component }, 
{ path: 'rack/rack2', component: Rack2Component },
{path:'rack/rack3',component:Rack3Component},
{path:'shelf/shelf1',component:Shelf1Component},
{path:'shelf/shelf2',component:Shelf1Component},
{path:'shelf/shelf3',component:Shelf1Component},
{path:'shelf/shelf4',component:Shelf1Component},
{ path: 'rack2/shelf2', component: Rack2shelf2Component },
{ path: 'rack2/shelf3', component: Rack2shelf2Component },
{ path: 'rack2/shelf4', component: Rack2shelf2Component },
{ path: 'rack2/shelf1', component: Rack2shelf2Component },
{ path: 'rack3/shelf3', component: Rack3shelf3Component },
{ path: 'rack3/shelf2', component: Rack3shelf3Component },
{ path: 'rack3/shelf1', component: Rack3shelf3Component },
{ path: 'rack3/shelf4', component: Rack3shelf3Component },
{ path: 'classicfinishedgoods', component: ClassicfgComponent },
{path:'Bin/:binId',component:BincardComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
