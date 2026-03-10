"use client";

import { cn } from "@/shared/lib";
import { FunctionComponent } from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  variants: Variant[];
  onChooseVariant?: (variant: Variant["value"]) => void;
  selectedVariant?: Variant["value"];
  className?: string;
};

export const GroupVariants: FunctionComponent<Props> = (props) => {
  const { className, variants, onChooseVariant, selectedVariant } = props;

  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none",
      )}
    >
      {variants.map((variant) => (
        <button
          key={variant.name}
          onClick={() => onChooseVariant?.(variant.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-white shadow": variant.value === selectedVariant,
              "text-gray-500 opacity-50 pointer-events-none": variant.disabled,
            },
          )}
        >
          {variant.name}
        </button>
      ))}
    </div>
  );
};
