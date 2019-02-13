import { Component, OnInit } from '@angular/core';
import { FlickrFoodService } from '../../service/flickr-food.service';
import { Router } from '@angular/router';
import { Rating } from 'src/app/interface/rating';

@Component({
  selector: 'app-cuisine-detail',
  templateUrl: './cuisine-detail.component.html',
  styleUrls: ['./cuisine-detail.component.scss']
})
export class CuisineDetailComponent implements OnInit {
  currentRate;
  rating: Object;

  constructor(
    private flickrFoodService: FlickrFoodService,
    private router:Router
    ) { }

  ngOnInit() {
    this.currentRate = 0;
  }

  onRatingSave(rating: Rating) {
    this.rating = {
      rating: this.currentRate,
      user_name: rating.user_name,
      reason: rating.reason
    }
    // this.ratingEvent.emit(this.rating);
    this.flickrFoodService.reviewForm.reset();
    this.router.navigate(['/home']);

}



}
