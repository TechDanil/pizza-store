import { ProductImage } from "@/components/shared/product-image/product-image";
import { cn } from "@/lib";
import { Ingredient, ProductItem } from "@prisma/client";
import { FunctionComponent } from "react";

type Props = {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean; 
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: FunctionComponent<Props> = (props) => {
  const { imageUrl, name, ingredients, items, loading, onSubmit, className } = props;

  
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={40} />
    </div>
  )
}; 