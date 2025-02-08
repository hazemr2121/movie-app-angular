import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WishlistService } from './services/wishlist.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public wishlistService: WishlistService) {}
  title = 'movie-app-angular';
}
