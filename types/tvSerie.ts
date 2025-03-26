export interface ITvSerie {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
}

export enum TV_SERIE_CATEGORY {
  AIRING_TODAY = 'airing_today',
  ON_THE_AIR = 'on_the_air',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
}
