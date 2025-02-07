import { Routes } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesWishlistComponent } from './movies-wishlist/movies-wishlist.component';
import { MoviesSearchResultsComponent } from './movies-search-results/movies-search-results.component';

export const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'wishlist', component: MoviesWishlistComponent },
  { path: 'search', component: MoviesSearchResultsComponent },
  { path: '**', redirectTo: '' },
];
