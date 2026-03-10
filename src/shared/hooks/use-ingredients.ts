import { useEffect, useState } from "react";

import { Ingredient } from "@prisma/client";
import { Api } from "../services/api-client";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await Api.ingredients.getIngredients();
      setIsLoading(false);
      setIngredients(response);
    })();
  }, []);

  return { ingredients, isLoading };
};
