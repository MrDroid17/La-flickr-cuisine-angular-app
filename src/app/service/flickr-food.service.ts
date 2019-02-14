import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlickrFoodService {
  // review form
  reviewForm: FormGroup = new FormGroup({
    rating: new FormControl(''),
    user_name: new FormControl('', Validators.required),
    reason: new FormControl('', [Validators.required]),
  });

  result$: Observable<string[]>;
  API_KEY = 'e70fdfc8f3affd9537b6b42fa44f63f7';
  constructor(private http: Http) {}

  getResult(query: string) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this
      .API_KEY}&tags=${query}&per_page=200&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .pipe(map(res => res.json()))
      .pipe(map(val => {
        if (val.stat === 'ok') {
          return val.photos.photo.map((photo: any) => {
            return {
              url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
              title: photo.title,
              ispublic: photo.ispublic,
              isfriend: photo.isfriend,
              isfamily: photo.isfamily
            };
          });
        } else {
          return [];
        }
      }));
  }

}
