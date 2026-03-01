"use client";

import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm } from "./choose-pizza-form";

type Props = {
  product: Product;
  className?: string;
};

export const ChooseProductModal: FunctionComponent<Props> = (props) => {
  const { product, className } = props;

  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        <ChoosePizzaForm />
      </DialogContent>
    </Dialog>
  ); 
};
