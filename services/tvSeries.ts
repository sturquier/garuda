import { useQuery } from '@tanstack/react-query';

import { ITvSerie, TV_SERIE_CATEGORY } from '@/types/tvSerie';
import { getHeaders } from '@/utils/api';
import {
  initialPaginatedResource,
  TPaginatedResource,
} from '@/utils/pagination';

// TODO : pagination
export const useFetchTvSeries = (
  category: TV_SERIE_CATEGORY,
  language: string,
) => {
  return useQuery<TPaginatedResource<ITvSerie>>({
    queryKey: ['fetchTvSeries', category, language],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/tv/${category}?language=${language}&region=${language}&page=1`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
    initialData: initialPaginatedResource,
  });
};
