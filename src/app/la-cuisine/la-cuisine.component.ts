import { Component, OnInit } from '@angular/core';
import { FlickrFoodService } from '../service/flickr-food.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Cuisine } from '../interface/cuisine';

@Component({
  selector: 'app-la-cuisine',
  templateUrl: './la-cuisine.component.html',
  styleUrls: ['./la-cuisine.component.scss']
})
export class LaCuisineComponent implements OnInit {

  title = 'La Flickr Cuisine';
  query= 'famous-food';
  cuisine_array: any[];
  rating: number;
  rated_cuisine: Cuisine;
  

  constructor(
    private flickrFoodService: FlickrFoodService,
    private dataService: DataService,
    private router: Router,
    ){}

  ngOnInit(){
    this.getFoodList();
    this.rated_cuisine = this.dataService.getCuisine();
  }

  getFoodList(){
    this.flickrFoodService.getResult(this.query).subscribe(res=>{
      this.cuisine_array = res;
    })
  }

  onImageClick(cuisine: Cuisine){
    this.dataService.setCuisine(cuisine);
    this.router.navigate(['/cuisine-detail']);

  }
}
