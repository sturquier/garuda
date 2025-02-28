import { useQuery } from '@tanstack/react-query';

import { GENRE_TYPE, IGenre } from '@/types/genre';
import { getHeaders } from '@/utils/api';

// TODO : dynamic language
export const useFetchGenres = (type: GENRE_TYPE) => {
  return useQuery<IGenre[]>({
    queryKey: ['fetchGenres', type],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/genre/${type}/list?language=en`,
        { headers: getHeaders() },
      );

      const { genres }: { genres: IGenre[] } = await response.json();

      return genres;
    },
    initialData: [],
  });
};
