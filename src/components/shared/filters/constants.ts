export const PRICE_FILTER = {
  MIN: 0,
  MAX: 5000,
  STEP: 10,
  DEFAULT_FROM: 0,
  DEFAULT_TO: 3000,
} as const;

export const PIZZA_TYPES = [
  { text: "Тонкое", value: "1" },
  { text: "Традиционное", value: "2" },
] as const;

export const SIZES = [
  { text: "20 см", value: "20" },
  { text: "30 см", value: "30" },
  { text: "40 см", value: "40" },
] as const;

export const DEFAULT_FILTERS_LIMIT = 4;
