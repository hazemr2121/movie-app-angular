import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'fcb5a2d9b29416947192347cf8843e94';
  private baseUrl = 'https://api.themoviedb.org/3';
  private currentLanguage = new BehaviorSubject<string>('en');

  constructor(
    private http: HttpClient,
    private lagnuageService: LanguageService
  ) {}
  getNowPlaying(page: number = 1): Observable<any> {
    return this.lagnuageService
      .getCurrentLanguage()
      .pipe(
        switchMap((lang) =>
          this.http.get(
            `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${lang}`
          )
        )
      );
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.lagnuageService
      .getCurrentLanguage()
      .pipe(
        switchMap((lang) =>
          this.http.get(
            `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=${lang}`
          )
        )
      );
  }

  getRecommendations(movieId: number): Observable<any> {
    return this.lagnuageService
      .getCurrentLanguage()
      .pipe(
        switchMap((lang) =>
          this.http.get(
            `${this.baseUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=${lang}`
          )
        )
      );
  }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.lagnuageService
      .getCurrentLanguage()
      .pipe(
        switchMap((lang) =>
          this.http.get(
            `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}&language=${lang}`
          )
        )
      );
  }

  setLanguage(language: string) {
    this.currentLanguage.next(language);
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }
}
