import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import {NgbRatingModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FlickrFoodService } from './service/flickr-food.service';
import { AppRoutingModule } from './app-routing.module';
import { LaCuisineModule } from './la-cuisine/la-cuisine.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbRatingModule,
    LaCuisineModule,
    NgbPaginationModule
  ],
  providers: [FlickrFoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
