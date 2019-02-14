import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cuisine } from '../interface/cuisine';
import { Rating } from '../interface/rating';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cuisine: Cuisine;

  constructor() {
  }

  public setCuisine(cuisine: Cuisine): void {
      this.cuisine = cuisine;
  }

  public getCuisine(): object {
      return this.cuisine;
  }

  public setRating(rating: number): void {
      this.cuisine.rating = rating;
  }
  public setName(name: string): void {
      this.cuisine.user_name = name;
  }

}
