import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "@/services/constants";

export const search = async (query: string): Promise<Product[]> =>
  await axiosInstance
    .get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: {
        query,
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
