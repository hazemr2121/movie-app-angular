import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCardComponent, FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  nowPlaying: any;
  page: number = 1;
  query: any;
  current: any;
  search: boolean = false;
  constructor(private movieService: MovieService) {
    this.movieService.getNowPlaying(this.page).subscribe((data) => {
      this.nowPlaying = data.results;
    });
  }

  nextPage() {
    if (this.nowPlaying.length < 20) return;
    if (this.search) {
      this.movieService
        .searchMovies(this.query, ++this.page)
        .subscribe((data) => {
          this.nowPlaying = data.results;
        });
      window.scrollTo(0, 0);
      return;
    }
    this.movieService.getNowPlaying(++this.page).subscribe((data) => {
      this.nowPlaying = data.results;
    });
    window.scrollTo(0, 0);
  }

  prevPage() {
    if (this.page <= 1) return;
    if (this.search) {
      this.movieService
        .searchMovies(this.query, --this.page)
        .subscribe((data) => {
          this.nowPlaying = data.results;
        });
      window.scrollTo(0, 0);
      return;
    }
    this.movieService.getNowPlaying(--this.page).subscribe((data) => {
      this.nowPlaying = data.results;
    });
    window.scrollTo(0, 0);
  }

  searchMovies(query: string) {
    if (!query) {
      this.search = false;
      this.current = query;
      this.movieService.getNowPlaying(this.page).subscribe((data) => {
        this.nowPlaying = data.results;
      });
    } else {
      this.search = true;
      this.current = query;
      this.page = 1;
      this.movieService
        .searchMovies(this.query, this.page)
        .subscribe((data) => {
          this.nowPlaying = data.results;
        });
    }
  }
}
