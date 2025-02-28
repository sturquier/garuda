import { useQuery } from '@tanstack/react-query';

import { IMovie, MOVIE_CATEGORY } from '@/types/movie';
import { getHeaders } from '@/utils/api';
import { TPaginatedResource } from '@/utils/pagination';

// TODO : dynamic category
// TODO : dynamic language
// TODO : pagination
export const useFetchMovies = () => {
  return useQuery<TPaginatedResource<IMovie>>({
    queryKey: ['fetchMovies'],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/movie/${MOVIE_CATEGORY.UPCOMING}?language=en&page=1`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
  });
};
