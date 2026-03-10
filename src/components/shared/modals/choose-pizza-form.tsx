'use client'

import { FunctionComponent, useState } from "react";

import { PizzaSize, pizzaSizes, PizzaType } from "@/app/constants/pizza";
import { GroupVariants, Title } from "@/components/shared";

import { Button } from "@/components/ui";
import { cn } from "@/shared/lib";  
import { Ingredient, ProductItem } from "@prisma/client";

type Props = {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit?: () => void;
  className?: string;
};

const textDetails = "30 см, традицио  ное тесто";
const price = 350;

export const ChoosePizzaForm: FunctionComponent<Props> = (props) => {
  const { imageUrl, name, loading, onSubmit, className } = props;

  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const onChooseVariant = (variant: PizzaSize) => {
    setSize(variant);
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
  
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <GroupVariants variants={pizzaSizes} selectedVariant={String(size)} onChooseVariant={(variant: PizzaSize) => onChooseVariant(variant)} />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
