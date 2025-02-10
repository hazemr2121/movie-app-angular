import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../movie.inteface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-wishlist',
  imports: [RouterModule],
  templateUrl: './movies-wishlist.component.html',
  styleUrl: './movies-wishlist.component.css',
})
export class MoviesWishlistComponent {
  wishlistMovies: Movie[] = [];
  constructor(
    private router: Router,
    private wishlistService: WishlistService
  ) {}
  ngOnInit() {
    this.wishlistService.getWishlist().subscribe((movies) => {
      this.wishlistMovies = movies;
    });
  }

  removeFromWishlist(movieId: number) {
    this.wishlistService.removeFromWishlist(movieId);
  }

  goToMovies() {
    this.router.navigate(['/']);
  }
  getStarClasses(rating: number) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating / 2 % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const starClasses = [];
    for (let i = 0; i < fullStars; i++) {
      starClasses.push('fa-solid fa-star yellow-star fa-lg');
    }
    if (hasHalfStar) {
      starClasses.push('fa-solid fa-star-half-stroke yellow-star fa-lg');
    }
    for (let i = 0; i < emptyStars; i++) {
      starClasses.push('fa-regular fa-star fa-lg');
    }
    return starClasses;
  }

}
