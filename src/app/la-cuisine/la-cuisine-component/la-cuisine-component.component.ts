import { Component, OnInit, Input } from '@angular/core';
import { Cuisine } from 'src/app/interface/cuisine';
import { FlickrFoodService } from 'src/app/service/flickr-food.service';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-la-cuisine-component',
  templateUrl: './la-cuisine-component.component.html',
  styleUrls: ['./la-cuisine-component.component.scss']
})
export class LaCuisineComponentComponent implements OnInit {

  @Input() cuisine: Cuisine;
  rated_cuisine: Cuisine;

  constructor(
    private flickrFoodService: FlickrFoodService,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.rated_cuisine = this.dataService.getCuisine();
  }

  getProperTitle(title: string): string {
    let proper_title = '';
    if (title.length > 30) {
      proper_title = title.substring(0, 27) + '...';
    } else {
      proper_title = title;
    }
    return proper_title;
  }

  onImageClick(cuisine: Cuisine) {
    this.dataService.setCuisine(cuisine);
    this.router.navigate(['/cuisine-detail']);

  }


  getRatedBy(url: string): string {
    let rated_by = '';
    if (url == this.rated_cuisine.url) {
      rated_by = `  by ${this.rated_cuisine.user_name}`
    } else {
      rated_by = '';
    }
    return rated_by;
  }

}
