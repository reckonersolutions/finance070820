import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinDashboardComponent } from '../finance/fin-dashboard/fin-dashboard.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FinDashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
