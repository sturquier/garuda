import { useQuery } from '@tanstack/react-query';

import { IMovie, MOVIE_CATEGORY } from '@/types/movie';
import { getHeaders } from '@/utils/api';
import { TPaginatedResource } from '@/utils/pagination';

// TODO : dynamic language
// TODO : dynamic region
// TODO : pagination
export const useFetchMovies = (category: MOVIE_CATEGORY) => {
  return useQuery<TPaginatedResource<IMovie>>({
    queryKey: ['fetchMovies', category],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/movie/${category}?language=en&region=fr&page=1`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
  });
};
