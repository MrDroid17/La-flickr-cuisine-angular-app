import { TestBed } from '@angular/core/testing';

import { FlickrFoodService } from './flickr-food.service';

describe('FlickrFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrFoodService = TestBed.get(FlickrFoodService);
    expect(service).toBeTruthy();
  });
});
