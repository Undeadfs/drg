import { NgModule } from '@angular/core';
import {NgsgModule} from 'ng-sortgrid';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgsgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
