"use client";

import { ProductCard } from "@/components/shared";
import { Title } from "@/components/shared/title/title";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
// import { ProductWithRelations } from "@prisma/client";
import { FunctionComponent, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  externalClass?: string;
  listClassName?: string;
};

export const ProductGroupList: FunctionComponent<Props> = (props) => {
  const { title, items, categoryId, externalClass, listClassName } = props;

  console.log(items);

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  });

  return (
    <div className={externalClass} id={title} ref={ref}>
      <Title text={title} size="lg" externalClass="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imgUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
