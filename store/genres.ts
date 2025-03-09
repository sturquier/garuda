import { create } from 'zustand';

import { GENRE_TYPE, TGenres } from '@/types/genre';

interface IGenreState {
  genres: TGenres;
}

interface IGenreAction {
  setGenres: (genres: IGenreState['genres']) => void;
}

export const useGenreStore = create<IGenreState & IGenreAction>((set) => ({
  genres: {
    [GENRE_TYPE.MOVIE]: [],
    [GENRE_TYPE.TV]: [],
  },
  setGenres: (genres) => set(() => ({ genres })),
}));
