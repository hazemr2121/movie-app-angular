import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from '../movie.inteface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistKey = 'movie_wishlist';
  private wishlistMovies = new BehaviorSubject<Movie[]>([]);

  constructor() {
    this.loadWishlist();
  }
  private loadWishlist() {
    const savedWishlist = localStorage.getItem(this.wishlistKey);
    if (savedWishlist) {
      this.wishlistMovies.next(JSON.parse(savedWishlist));
    }
  }

  private saveWishlist(movies: Movie[]) {
    localStorage.setItem(this.wishlistKey, JSON.stringify(movies));
    this.wishlistMovies.next(movies);
  }

  getWishlist(): Observable<Movie[]> {
    return this.wishlistMovies.asObservable();
  }

  addToWishlist(movie: Movie) {
    const currentWishlist = this.wishlistMovies.value;
    if (!this.isInWishlist(movie.id)) {
      this.saveWishlist([...currentWishlist, movie]);
    }
  }

  removeFromWishlist(movieId: number) {
    const currentWishlist = this.wishlistMovies.value;
    this.saveWishlist(currentWishlist.filter((movie) => movie.id !== movieId));
  }

  isInWishlist(movieId: number): boolean {
    return this.wishlistMovies.value.some((movie) => movie.id === movieId);
  }
  // navbar علشان
  getWishlistCount(): Observable<number> {
    return this.wishlistMovies.pipe(map((movies) => movies.length));
  }

  toggleWishlist(movie: Movie) {
    if (this.isInWishlist(movie.id)) {
      this.removeFromWishlist(movie.id);
    } else {
      this.addToWishlist(movie);
    }
  }
}
