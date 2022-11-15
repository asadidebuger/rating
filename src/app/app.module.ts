import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RatingModule} from "./rating/rating.module";
import {RatingComponent} from "./rating/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RatingModule,

  ],
  exports:[RatingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
