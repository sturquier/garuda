import { useQuery } from '@tanstack/react-query';

import { IMovie, MOVIE_CATEGORY } from '@/types/movie';
import { TPaginatedResource } from '@/utils/pagination';

// TODO : dynamic category
// TODO : dynamic language
// TODO : pagination
// TODO : headers as util
export const useFetchMovies = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append(
    'Authorization',
    `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
  );

  return useQuery<TPaginatedResource<IMovie>>({
    queryKey: ['fetchMovies', headers],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/movie/${MOVIE_CATEGORY.UPCOMING}?language=en-US&page=1`,
        { headers },
      );

      return await response.json();
    },
  });
};
