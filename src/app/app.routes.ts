import { Routes } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesWishlistComponent } from './movies-wishlist/movies-wishlist.component';
import { MoviesSearchResultsComponent } from './movies-search-results/movies-search-results.component';

export const routes: Routes = [
  { path: '', component: MoviesListComponent }, // Main page
  { path: 'movie/:id', component: MovieDetailsComponent }, // Movie details page
  { path: 'wishlist', component: MoviesWishlistComponent }, // Wishlist page
  { path: 'search', component: MoviesSearchResultsComponent }, // Search results page
  { path: '**', redirectTo: '' }, // Redirect to main page for unknown routes
];
