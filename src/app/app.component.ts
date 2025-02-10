import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WishlistService } from './services/wishlist.service';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { LanguageService } from './services/language.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentLanguge: string = 'en';
  availiableLang: string[] = [];
  constructor(
    public wishlistService: WishlistService,
    public languageService: LanguageService,
    public movieService: MovieService
  ) {
    this.languageService.getCurrentLanguage().subscribe((data) => {
      this.currentLanguge = data;
    });
    this.availiableLang = this.languageService.getAvailableLanguages();
  }
  title = 'movie-app-angular';

  changeLang(lang: string) {
    this.languageService.setLanguage(lang);
  }
}
