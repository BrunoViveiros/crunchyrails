'use client';

import { Container } from '@/components/atoms/Container/Container';
import { CardCollection } from '@/components/molecules/CardCollection/CardCollection';
import HeroBanner from '@/components/molecules/HeroBanner/HeroBanner';
import { Navbar } from '@/components/molecules/Navbar/Navbar';
import { useTopAnimes } from '@/hooks/useTopAnimes';

export default function Homepage() {
  const { data: topAnimeData } = useTopAnimes();

  return (
    <>
      <Navbar />

      <HeroBanner />

      <Container>
        <CardCollection title="Top Animes" cards={topAnimeData} />
      </Container>
    </>
  );
}
