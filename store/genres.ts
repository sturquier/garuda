import { create } from 'zustand';

import { GENRE_TYPE, IGenre } from '@/types/genre';

interface IGenreState {
  genres: Record<GENRE_TYPE, IGenre[]>;
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
