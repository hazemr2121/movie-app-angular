import { DatePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-movie-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie: any;
  isWishlisted?: boolean;
  constructor(private wishlistService: WishlistService) {}
  ngOnInit() {
    this.isWishlisted = this.wishlistService.isInWishlist(this.movie.id);
  }

  toggleWishlist() {
    this.wishlistService.toggleWishlist(this.movie);
    this.isWishlisted = this.wishlistService.isInWishlist(this.movie.id);
  }
}
