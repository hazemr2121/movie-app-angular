import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Movie } from '../movie.inteface';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../services/wishlist.service';
import { LanguagePipe } from '../pipes/language.pipe.spec';
import { MovieCardComponent } from "../movies-list/movie-card/movie-card.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, FormsModule, LanguagePipe, MovieCardComponent],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | any;
  recommendations: Movie[] = [];
  isLoading: boolean = true;
  isWishlisted?: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.loadMovieDetails(+movieId);
        this.loadRecommendations(+movieId);
        this.isWishlisted = this.wishlistService.isInWishlist(+movieId);
      }
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  loadMovieDetails(movieId: number): void {
    this.isLoading = true;
    this.movieService.getMovieDetails(movieId).subscribe({
      next: (data: Movie) => {
        this.movie = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load movie details:', err);
        this.movie = null;
        this.isLoading = false;
      },
    });
  }

  loadRecommendations(movieId: number): void {
    this.movieService.getRecommendations(movieId).subscribe({
      next: (data: { results: Movie[] }) => {
        this.recommendations = data.results;
      },
      error: (err) => {
        console.error('Failed to load recommendations:', err);
        this.recommendations = [];
      },
    });
  }

  toggleWishlist() {
    this.wishlistService.toggleWishlist(this.movie);
    this.isWishlisted = this.wishlistService.isInWishlist(this.movie.id);
  }

  getStarClasses(rating: number) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating / 2 % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const starClasses = [];
    for (let i = 0; i < fullStars; i++) {
      starClasses.push('fa-solid fa-star yellow-star fa-xl');
    }
    if (hasHalfStar) {
      starClasses.push('fa-solid fa-star-half-stroke yellow-star fa-xl');
    }
    for (let i = 0; i < emptyStars; i++) {
      starClasses.push('fa-regular fa-star fa-xl');
    }
    return starClasses;
  }
}
