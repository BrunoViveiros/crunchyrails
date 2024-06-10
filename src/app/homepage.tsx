'use client';

import { Container } from '@/components/atoms/Container/Container';
import { CardCollection } from '@/components/molecules/CardCollection/CardCollection';
import HeroBanner from '@/components/molecules/HeroBanner/HeroBanner';
import { Navbar } from '@/components/molecules/Navbar/Navbar';
import { useTopAnimes } from '@/hooks/useTopAnimes';

export default function Homepage() {
  const { data } = useTopAnimes();

  return (
    <>
      <Navbar />

      <HeroBanner />

      <Container>
        <CardCollection />
      </Container>
      {data?.map((anime) => <p key={anime.id}>{anime.name}</p>)}
    </>
  );
}
