import { useQuery } from '@tanstack/react-query';

import { IMovie, MOVIE_CATEGORY } from '@/types/movie';
import { getHeaders } from '@/utils/api';
import {
  initialPaginatedResource,
  TPaginatedResource,
} from '@/utils/pagination';

// TODO : pagination
export const useFetchMovies = (category: MOVIE_CATEGORY, language: string) => {
  return useQuery<TPaginatedResource<IMovie>>({
    queryKey: ['fetchMovies', category, language],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/movie/${category}?language=${language}&region=${language}&page=1`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
    initialData: initialPaginatedResource,
  });
};
