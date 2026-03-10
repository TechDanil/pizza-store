"use client";

import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/shared/@types/prisma";

import { ChooseProductForm } from "./choose-product-form";
import { ChoosePizzaForm } from "./choose-pizza-form";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseProductModal: FunctionComponent<Props> = (props) => {
  const { product, className } = props;

  const router = useRouter();

  const isPizzaForm = !!product.items[0].pizzaType;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  console.log(isPizzaForm);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden",
          className,
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            // loading={loading}
            onSubmit={() => router.back()}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            items={product.items}
            // loading={loading}
            onSubmit={() => router.back()}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
