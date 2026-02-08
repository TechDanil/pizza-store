import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { PRICE_FILTER } from "@/components/shared/filters/constants";

type Price = {
  priceFrom: number;
  priceTo: number;
};

type QueryFilters = {
  ingredients: string;
  sizes: string;
  pizzaTypes: string;
} & Price;

export const useFilters = () => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(",")),
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [],
    ),
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : [],
    ),
  );

  const [prices, setPrices] = useState<Price>({
    priceFrom: Number(searchParams.get("priceFrom")) || PRICE_FILTER.DEFAULT_FROM,
    priceTo: Number(searchParams.get("priceTo")) || PRICE_FILTER.DEFAULT_TO,
  });

  const updatePrice = (name: keyof Price, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
