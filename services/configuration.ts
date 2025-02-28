import { useQuery } from '@tanstack/react-query';

import { IConfiguration } from '@/types/configuration';
import { getHeaders } from '@/utils/api';

export const useFetchConfiguration = () => {
  return useQuery<IConfiguration>({
    queryKey: ['fetchConfiguration'],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_BASE_URL}/configuration`,
        { headers: getHeaders() },
      );

      return await response.json();
    },
    initialData: {},
  });
};
