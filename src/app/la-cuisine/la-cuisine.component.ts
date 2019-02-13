import { Component, OnInit } from '@angular/core';
import { FlickrFoodService } from '../service/flickr-food.service';

@Component({
  selector: 'app-la-cuisine',
  templateUrl: './la-cuisine.component.html',
  styleUrls: ['./la-cuisine.component.scss']
})
export class LaCuisineComponent implements OnInit {

  title = 'La Flickr Cuisine';
  query= 'food';
  cuisine_array: any[];

  constructor(
    private flickrFoodService: FlickrFoodService
    ){}

  ngOnInit(){
    this.getFoodList();
  }

  getFoodList(){
    this.flickrFoodService.getResult(this.query).subscribe(res=>{
      this.cuisine_array = res;
    })
  }
}
