import { useQuery } from '@tanstack/react-query';

import { ITvSerie, TV_SERIE_CATEGORY } from '@/types/tvSerie';
import { getHeaders } from '@/utils/api';
import { TPaginatedResource } from '@/utils/pagination';

// TODO : dynamic language
// TODO : dynamic region
// TODO : pagination
export const useFetchTvSeries = (category: TV_SERIE_CATEGORY) => {
  return useQuery<TPaginatedResource<ITvSerie>>({
    queryKey: ['fetchTvSeries', category],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/tv/${category}?language=en&region=fr&page=1`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
  });
};
