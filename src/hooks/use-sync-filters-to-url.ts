import type { FilterQueryParams } from "@/components/shared/filters/types";
import { PRICE_FILTER } from "@/components/shared/filters/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";

type PriceState = { from: number; to: number };

type UseSyncFiltersToUrlParams = {
  price: PriceState;
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  ingredientIds: Set<string>;
};

const buildQueryParams = (
  params: UseSyncFiltersToUrlParams,
): FilterQueryParams => {
  const query: FilterQueryParams = {};

  if (params.price.from !== PRICE_FILTER.DEFAULT_FROM) {
    query.priceFrom = params.price.from;
  }
  if (params.price.to !== PRICE_FILTER.DEFAULT_TO) {
    query.priceTo = params.price.to;
  }
  if (params.sizes.size > 0) {
    query.sizes = Array.from(params.sizes);
  }
  if (params.pizzaTypes.size > 0) {
    query.pizzaTypes = Array.from(params.pizzaTypes);
  }
  if (params.ingredientIds.size > 0) {
    query.ingredients = Array.from(params.ingredientIds);
  }

  return query;
};

export const useSyncFiltersToUrl = (props: UseSyncFiltersToUrlParams) => {
  const { price, sizes, pizzaTypes, ingredientIds } = props;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const query = buildQueryParams({
      price: { from: price.from, to: price.to },
      sizes,
      pizzaTypes,
      ingredientIds,
    });
    const queryString = qs.stringify(query, { arrayFormat: "comma" });
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(url, { scroll: false });
  }, [price.to, price.from, sizes, pizzaTypes, ingredientIds, router, pathname]);
};
