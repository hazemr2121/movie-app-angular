import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  nowPlaying: any;
  constructor(private movieService: MovieService) {
    this.movieService.getNowPlaying().subscribe((data) => {
      this.nowPlaying = data.results;
    });
  }
}
