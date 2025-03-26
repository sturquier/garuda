import { ITvSerie } from '@/types/tvSerie';

export const tvSeriesMock: ITvSerie[] = [
  {
    id: 1,
    name: 'The Office',
    overview: 'Dunder Mifflin',
    first_air_date: '2005-03-24',
    poster_path: '/the-office-poster.png',
    genre_ids: [2],
  },
  {
    id: 2,
    name: 'Arcane',
    overview: 'League of Legends',
    first_air_date: '2021-11-06',
    poster_path: '/arcane-poster.png',
    genre_ids: [1],
  },
];
