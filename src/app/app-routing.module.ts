import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { AppComponent } from './app.component';
import { LaCuisineComponent } from './la-cuisine/la-cuisine.component';
import { CuisineDetailComponent } from './la-cuisine/cuisine-detail/cuisine-detail.component';

const routes: Routes = [
    { path: '', component: LaCuisineComponent },
    { path: 'home', component: LaCuisineComponent },
    { path: 'cuisine-detail', component: CuisineDetailComponent }
]

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
