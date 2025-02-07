import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchResultsComponent } from './movies-search-results.component';

describe('MoviesSearchResultsComponent', () => {
  let component: MoviesSearchResultsComponent;
  let fixture: ComponentFixture<MoviesSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSearchResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
