import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/components/shared";
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
    <Container externalClass="mt-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} className=" " size={40} />

        <div className="w-[490px] bg-[#fcfcfc] p-7 ">
          <Title text={product.name} size="lg" externalClass="font-extrabold" />

          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>

          <GroupVariants
            selectedVariant="1"
            variants={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
