import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FlickrFoodService } from './service/flickr-food.service';
import { AppRoutingModule } from './app-routing.module';
import { LaCuisineComponent } from './la-cuisine/la-cuisine.component';
import { CuisineDetailComponent } from './la-cuisine/cuisine-detail/cuisine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LaCuisineComponent,
    CuisineDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [FlickrFoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
