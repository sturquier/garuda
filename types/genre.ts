export interface IGenre {
  id: number;
  name: string;
}

export enum GENRE_TYPE {
  MOVIE = 'movie',
  TV = 'tv',
}

export type TGenres = Record<GENRE_TYPE, IGenre[]>;
