import { Component, OnInit } from '@angular/core';
import { FlickrFoodService } from '../../service/flickr-food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuisine-detail',
  templateUrl: './cuisine-detail.component.html',
  styleUrls: ['./cuisine-detail.component.scss']
})
export class CuisineDetailComponent implements OnInit {

  constructor(
    private flickrFoodService: FlickrFoodService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onRatingSave(rating){

  }



}
