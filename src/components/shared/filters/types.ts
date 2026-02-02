export type PriceRange = {
  from: number;
  to: number;
};

export type FilterQueryParams = {
  priceFrom?: number;
  priceTo?: number;
  sizes?: string[];
  pizzaTypes?: string[];
  ingredients?: string[];
};
