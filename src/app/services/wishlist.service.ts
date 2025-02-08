import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../movie.inteface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistKey = 'movie_wishlist';
  private wishlistMovies = new BehaviorSubject<Movie[]>([]);

  constructor() {
    
  }
}
