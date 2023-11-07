import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ChartModule } from 'angular-highcharts';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RmComponent,
    FgComponent,
    ClassicComponent,
    Rack1Component,
    Rack2Component,
    Rack3Component,
    Shelf1Component,
    Rack2shelf2Component,
    Rack3shelf3Component,
    ClassicfgComponent,
    BincardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    ChartModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
