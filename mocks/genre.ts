import { GENRE_TYPE, IGenre, TGenres } from '@/types/genre';

export const moviesGenresMock: IGenre[] = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'History' },
  { id: 3, name: 'Science Fiction' },
];

export const tvGenresMock: IGenre[] = [
  { id: 1, name: 'Animation' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Documentary' },
];

export const genresMock: TGenres = {
  [GENRE_TYPE.MOVIE]: moviesGenresMock,
  [GENRE_TYPE.TV]: tvGenresMock,
};
