import { Container, ProductImage } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) { 
    notFound();
  }

  return ( 
    <Container externalClass="mt-10" >
      <ProductImage imageUrl={product.imageUrl} className=" " size={40} />
    </Container>
  );
};

export default ProductPage;
