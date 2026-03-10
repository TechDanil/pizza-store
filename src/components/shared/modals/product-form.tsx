"use client";

import { ProductWithRelations } from "@/shared/@types/prisma";
import { FunctionComponent } from "react";

type Props = {
  product: ProductWithRelations;
  onSubmit: () => void;
};

export const ProductForm: FunctionComponent<Props> = (props) => {
  const { product, onSubmit } = props;

  return (
    <div>
      <h1>Product Form</h1>
    </div>
  );
};
