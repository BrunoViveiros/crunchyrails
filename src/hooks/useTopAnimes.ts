import { useQuery, QueryClient, QueryKey } from '@tanstack/react-query';
import { getTopAnimes } from '@/infra/services/getTopAnimes';

const QUERY_KEY: QueryKey = ['top-animes'];

export const useTopAnimes = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: getTopAnimes,
  });
};

export const prefetchTopAnimes = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY,
    queryFn: getTopAnimes,
  });
};
