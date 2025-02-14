export interface MovieResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages?: number;
  total_results?: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres:object[],
  runtime:number,
  production_companies:object[]
}

export interface Genre {
  id: number;
  name: string;
}

export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}
