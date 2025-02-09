import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'fcb5a2d9b29416947192347cf8843e94';
  private baseUrl = 'https://api.themoviedb.org/3';
  private currentLanguage = new BehaviorSubject<string>('en');

  constructor(private http: HttpClient) {}
  getNowPlaying(page: number = 1): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.currentLanguage.value}`
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=${this.currentLanguage.value}`
    );
  }

  getRecommendations(movieId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=${this.currentLanguage.value}`
    );
  }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}&language=${this.currentLanguage.value}`
    );
  }

  setLanguage(language: string) {
    this.currentLanguage.next(language);
  }

  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }
}
