import { IMovie } from '@/types/movie';

export const moviesMock: IMovie[] = [
  {
    id: 1,
    title: 'Gladiator',
    overview: 'Ridley Scott movie',
    release_date: '2000-06-20',
    poster_path: '/gladiator-poster.png',
    genre_ids: [1, 2],
  },
  {
    id: 2,
    title: 'Inception',
    overview: 'Christopher Nolan movie',
    release_date: '2010-07-21',
    poster_path: '/inception-poster.png',
    genre_ids: [1, 3],
  },
];
