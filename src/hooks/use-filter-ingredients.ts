import { Api } from "@/services";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

export const useFilterIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [selectedIngredientsIds, { toggle: onSelectIngredient }] = useSet(
    new Set<string>([]),
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await Api.ingredients.getIngredients();
        setIngredients(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return { ingredients, selectedIngredientsIds, onSelectIngredient };
};
