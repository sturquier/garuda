import { useQuery } from '@tanstack/react-query';

import { GENRE_TYPE, IGenre } from '@/types/genre';
import { getHeaders } from '@/utils/api';

export const useFetchGenres = (type: GENRE_TYPE, language: string) => {
  return useQuery<IGenre[]>({
    queryKey: ['fetchGenres', type, language],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/genre/${type}/list?language=${language}`,
        { headers: getHeaders() },
      );

      const { genres }: { genres: IGenre[] } = await response.json();

      return genres;
    },
    initialData: [],
  });
};
