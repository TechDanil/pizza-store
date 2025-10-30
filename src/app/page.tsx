import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container externalClass="mt-10 ">
        <Title text="Все пиццы" size="lg" externalClass="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
