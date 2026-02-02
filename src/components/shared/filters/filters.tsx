"use client";

import { Input } from "@/components/ui";
import { Title } from "../title/title";
import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { RangeSlider } from "../range-slider/range-slider";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group/checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/use-filter-ingredients";
import { useSet } from "react-use";
import { useSyncFiltersToUrl } from "@/hooks/use-sync-filters-to-url";
import type { PriceRange } from "./types";
import {
  DEFAULT_FILTERS_LIMIT,
  PRICE_FILTER,
  PIZZA_TYPES,
  SIZES,
} from "./constants";
import { cn } from "@/lib";

export { DEFAULT_FILTERS_LIMIT } from "./constants";

type FiltersProps = {
  className?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const FilterSection: FunctionComponent<{
  title: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className, children }) => (
  <section className={cn("border-b border-neutral-100 py-5 first:pt-0 last:border-b-0", className)}>
    <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
    {children}
  </section>
);

export const Filters: FunctionComponent<FiltersProps> = ({
  className,
}) => {
  const rootClassName = className;
  const [price, setPrice] = useState<PriceRange>({
    from: PRICE_FILTER.DEFAULT_FROM,
    to: PRICE_FILTER.DEFAULT_TO,
  });

  const [sizes, { toggle: toggleSize }] = useSet(new Set<string>());
  const [pizzaTypes, { toggle: togglePizzaType }] = useSet(new Set<string>());
  const { ingredients, selectedIngredientsIds, onSelectIngredient } =
    useFilterIngredients();

  useSyncFiltersToUrl({
    price,
    sizes,
    pizzaTypes,
    ingredientIds: selectedIngredientsIds,
  });

  const ingredientItems = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: ingredient.id.toString(),
      })),
    [ingredients],
  );

  const setPriceFrom = useCallback(
    (from: number) => {
      const value = Number.isNaN(from) ? PRICE_FILTER.DEFAULT_FROM : from;
      setPrice((prev) => ({
        ...prev,
        from: clamp(value, PRICE_FILTER.MIN, Math.min(prev.to, PRICE_FILTER.MAX)),
      }));
    },
    [],
  );

  const setPriceTo = useCallback(
    (to: number) => {
      const value = Number.isNaN(to) ? PRICE_FILTER.DEFAULT_TO : to;
      setPrice((prev) => ({
        ...prev,
        to: clamp(value, Math.max(prev.from, PRICE_FILTER.MIN), PRICE_FILTER.MAX),
      }));
    },
    [],
  );

  const setPriceRange = useCallback(([from, to]: number[]) => {
    setPrice({
      from: clamp(from, PRICE_FILTER.MIN, PRICE_FILTER.MAX),
      to: clamp(to, PRICE_FILTER.MIN, PRICE_FILTER.MAX),
    });
  }, []);

  return (
    <aside className={cn("flex flex-col", rootClassName)} aria-label="Фильтры">
      <Title
        text="Фильтрация"
        size="sm"
        externalClass="font-semibold mb-6 text-foreground"
      />

      <div className="flex flex-col">
        <FilterSection title="Тип теста">
          <CheckboxFiltersGroup
            name="pizza-types"
            title=""
            items={[...PIZZA_TYPES]}
            onClickCheckbox={togglePizzaType}
            selected={pizzaTypes}
          />
        </FilterSection>

        <FilterSection title="Размер">
          <CheckboxFiltersGroup
            name="sizes"
            title=""
            items={[...SIZES]}
            onClickCheckbox={toggleSize}
            selected={sizes}
          />
        </FilterSection>

        <FilterSection title="Цена, ₽">
          <div className="flex gap-3 items-end">
            <label className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-xs text-muted-foreground">от</span>
              <Input
                type="number"
                min={PRICE_FILTER.MIN}
                max={PRICE_FILTER.MAX}
                value={price.from}
                onChange={(e) => setPriceFrom(Number(e.target.value))}
                className="h-9"
              />
            </label>
            <span className="text-muted-foreground pb-2" aria-hidden>
              –
            </span>
            <label className="flex flex-col gap-1.5 flex-1 min-w-0">
              <span className="text-xs text-muted-foreground">до</span>
              <Input
                type="number"
                min={PRICE_FILTER.MIN}
                max={PRICE_FILTER.MAX}
                value={price.to}
                onChange={(e) => setPriceTo(Number(e.target.value))}
                className="h-9"
              />
            </label>
          </div>
          <div className="mt-4">
            <RangeSlider
              min={PRICE_FILTER.MIN}
              max={PRICE_FILTER.MAX}
              step={PRICE_FILTER.STEP}
              value={[price.from, price.to]}
              onValueChange={setPriceRange}
            />
          </div>
        </FilterSection>

        <FilterSection title="Ингредиенты" className="pb-0">
          <CheckboxFiltersGroup
            name="ingredients"
            title=""
            defaultItems={ingredientItems.slice(0, DEFAULT_FILTERS_LIMIT)}
            items={ingredientItems}
            onClickCheckbox={onSelectIngredient}
            selected={selectedIngredientsIds}
          />
        </FilterSection>
      </div>
    </aside>
  );
};
