import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { prefetchTopAnimes } from '@/hooks/useTopAnimes';
import Homepage from '../components/templates/homepage';

export default async function Home() {
  const queryClient = new QueryClient();

  await prefetchTopAnimes(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Homepage />
    </HydrationBoundary>
  );
}
