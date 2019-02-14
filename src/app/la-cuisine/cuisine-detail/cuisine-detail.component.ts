import { Component, OnInit, Input } from '@angular/core';
import { FlickrFoodService } from '../../service/flickr-food.service';
import { Router } from '@angular/router';
import { Rating } from 'src/app/interface/rating';
import { Cuisine } from '../../interface/cuisine';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cuisine-detail',
  templateUrl: './cuisine-detail.component.html',
  styleUrls: ['./cuisine-detail.component.scss']
})
export class CuisineDetailComponent implements OnInit {
  currentRate;
  rating: object;
  cuisine: Cuisine;

  constructor(
    public flickrFoodService: FlickrFoodService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.currentRate = 0;
    this.cuisine = this.dataService.getCuisine();

  }

  onRatingSave(rating: Rating) {
    this.rating = {
      rating: this.currentRate,
      user_name: rating.user_name,
      reason: rating.reason
    }
    this.flickrFoodService.reviewForm.reset();
    this.dataService.setRating(this.currentRate);
    this.dataService.setName(rating.user_name);
    this.router.navigate(['/home']);

  }
}
