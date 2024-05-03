import { Container } from "@/components/atoms/Container/Container";
import { CardCollection } from "@/components/molecules/CardCollection/CardCollection";
import { Navbar } from "@/components/molecules/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <CardCollection />
      </Container>
    </>
  );
}
