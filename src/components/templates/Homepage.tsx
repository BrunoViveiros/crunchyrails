'use client';

import { Container } from '@/components/atoms/Container/Container';
import { CardCollection } from '@/components/molecules/CardCollection/CardCollection';
import HeroBanner from '@/components/molecules/HeroBanner/HeroBanner';
import { useTopAnimes } from '@/hooks/useTopAnimes';

export default function Homepage() {
  const { data: topAnimeData, status } = useTopAnimes();

  const requestSuccess = status === 'success';
  const requestFailed = status === 'error';
  const loading = status === 'pending';

  return (
    <>
      <HeroBanner />

      <Container>
        {loading && <p>Loading...</p>}
        {requestSuccess && (
          <CardCollection title="Top Animes" cards={topAnimeData} />
        )}
        {requestFailed && <p>Error</p>}
      </Container>
    </>
  );
}
