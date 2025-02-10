import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WishlistService } from './services/wishlist.service';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from './services/language.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    public wishlistService: WishlistService,
    public languageService: LanguageService,
    public movieService: MovieService
  ) {}
  title = 'movie-app-angular';

  changeLang(lang: string) {
    this.languageService.setLanguage(lang);
    this.movieService
      .getCurrentLanguage()
      .subscribe((data) => console.log(data));
  }
}
