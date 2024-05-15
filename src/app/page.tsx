import { Container } from "@/components/atoms/Container/Container";
import { CardCollection } from "@/components/molecules/CardCollection/CardCollection";
import HeroBanner from "@/components/molecules/HeroBanner/HeroBanner";
import { Navbar } from "@/components/molecules/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <Container>
        <CardCollection />
      </Container>
    </>
  );
}
