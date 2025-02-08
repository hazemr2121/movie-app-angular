import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../movie.inteface';

@Component({
  selector: 'app-movies-wishlist',
  imports: [],
  templateUrl: './movies-wishlist.component.html',
  styleUrl: './movies-wishlist.component.css'
})
export class MoviesWishlistComponent {
  wishlistMovies: Movie[] = [];


  constructor(private router: Router,private wishlistService: WishlistService) {}
  ngOnInit() {
    this.wishlistService.getWishlist().subscribe(movies => {
      this.wishlistMovies = movies;
    });
  }

  removeFromWishlist(movieId: number) {
    this.wishlistService.removeFromWishlist(movieId);
  }

  goToMovies(){
    this.router.navigate(['/']); 
  }
}
