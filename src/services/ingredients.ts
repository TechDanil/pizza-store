import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "@/services/constants";

export const getIngredients = async (): Promise<Ingredient[]> =>
  await axiosInstance
    .get<Ingredient[]>(ApiRoutes.INGREDIENTS)
    .then((response) => response.data)
    .catch((error) => error);
