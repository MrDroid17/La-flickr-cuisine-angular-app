import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaCuisineComponent } from './la-cuisine.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { NgbRatingModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LaCuisineComponentComponent } from './la-cuisine-component/la-cuisine-component.component';

@NgModule({
  declarations: [
    CuisineDetailComponent,
    LaCuisineComponent,
    LaCuisineComponentComponent
  ],
  imports: [
    CommonModule,
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
    NgbPaginationModule
  ]
})
export class LaCuisineModule { }
