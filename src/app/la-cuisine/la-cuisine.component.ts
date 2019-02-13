import { Component, OnInit } from '@angular/core';
import { FlickrFoodService } from '../service/flickr-food.service';
import { Rating } from '../interface/rating';

@Component({
  selector: 'app-la-cuisine',
  templateUrl: './la-cuisine.component.html',
  template: `<app-cuisine-detail (ratingEvent)="getRating($event)"></app-cuisine-detail>`,
  styleUrls: ['./la-cuisine.component.scss']
})
export class LaCuisineComponent implements OnInit {

  title = 'La Flickr Cuisine';
  query = 'food';
  cuisine_array: any[];
  rating = 4;

  constructor(
    private flickrFoodService: FlickrFoodService
  ) { }

  ngOnInit() {
    this.getFoodList();
  }

  getFoodList() {
    this.flickrFoodService.getResult(this.query).subscribe(res => {
      this.cuisine_array = res;
    })
  }

  // getRating(rating_data: Rating) {
  //   this.rating = rating_data.rating;
  // }
}
