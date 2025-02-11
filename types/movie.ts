export interface IMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: string[];
}

export enum MOVIE_CATEGORY {
  NOW_PLAYING = 'now_playing',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  UPCOMING = 'upcoming',
}
