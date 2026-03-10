const mapSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const 

const mapPizzaType = {
  1: "Традиц ионное",
  2: "Тонкое",
} as const

export const pizzaSizes = Object.keys(mapSize).map(([name, value]) => ({
  value, 
  name,
}))  

export type PizzaSize = keyof typeof mapSize;
export type PizzaType = keyof typeof mapPizzaType;