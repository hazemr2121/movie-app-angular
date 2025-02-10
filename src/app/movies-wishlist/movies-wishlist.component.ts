import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../movie.inteface';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-movies-wishlist',
  imports: [RouterModule],
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
    getStarClasses(rating: number) {
      const adjustedRating = rating / 2;  
      const fullStars = Math.floor(adjustedRating); 
      const hasHalfStar = adjustedRating % 1 >= 0.5; 
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 
      const starClasses = [];
      for (let i = 0; i < fullStars; i++) {
          starClasses.push('fa-solid fa-star yellow-star'); 
      }
      if (hasHalfStar) {
          starClasses.push('fa-regular fa-star-half-stroke yellow-star');  
      }
      for (let i = 0; i < emptyStars; i++) {
          starClasses.push('fa-regular fa-star black-star');  
      }
      return starClasses;
    }

 
  
 

  
}
