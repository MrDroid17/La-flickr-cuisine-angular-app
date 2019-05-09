import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCuisineComponentComponent } from './la-cuisine-component.component';

describe('LaCuisineComponentComponent', () => {
  let component: LaCuisineComponentComponent;
  let fixture: ComponentFixture<LaCuisineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCuisineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCuisineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
