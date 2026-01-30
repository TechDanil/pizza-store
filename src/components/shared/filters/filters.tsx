"use client";

import { Input } from "@/components/ui";
import { Title } from "../title/title";
import { FunctionComponent, useMemo, useState } from "react";
import { RangeSlider } from "../range-slider/range-slider";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group/checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/use-filter-ingredients";
import { useSet } from "react-use";

type Props = {
  externalClass?: string;
};

export const DEFAULT_FILTERS_LIMIT = 4;

export const Filters: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  const [price, setPrice] = useState<{
    priceFrom: number;
    priceTo: number;
  }>({ priceFrom: 0, priceTo: 3000 });

  const [sizes, { toggle: onAddSize }] = useSet(new Set<string>([]));

  const { ingredients, selectedIds, onAddId } = useFilterIngredients();

  const [pizzaTypes, { toggle: onAddPizzaType }] = useSet(new Set<string>([]));

  const loading = ingredients.length === 0;

  const items = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        text: ingredient.name,
        value: ingredient.id.toString(),
      })),
    [ingredients],
  );

  const updatePrice = (key: keyof typeof price, value: number) => {
    setPrice((prev) => ({ ...prev, [key]: value }));
  };

  const onPriceFromChange = (priceFrom: number) => {
    updatePrice("priceFrom", priceFrom);
  };

  const onPriceToChange = (priceTo: number) => {
    updatePrice("priceTo", priceTo);
  };

  return (
    <div className={externalClass}>
      <Title text="Фильтрация" size="sm" externalClass="mb-5 font-bold" />

      <CheckboxFiltersGroup
        loading={loading}
        title="Тип теста"
        name="pizza-types"
        externalClass="mb-5"
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        onClickCheckbox={onAddPizzaType}
        selected={pizzaTypes}
      />

      <CheckboxFiltersGroup
        loading={loading}
        title="Размеры"
        name="sizes"
        externalClass="mb-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={onAddSize}
        selected={sizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex mb-5 gap-3">
          <Input
            type="number"
            value={price.priceFrom}
            onChange={(e) => onPriceFromChange(Number(e.target.value))}
          />
          <Input
            type="number"
            value={price.priceTo}
            onChange={(e) => onPriceToChange(Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        loading={loading}
        title="Ингредиенты"
        name="ingredients"
        externalClass="mt-5"
        defaultItems={items.slice(0, DEFAULT_FILTERS_LIMIT)}
        items={items}
        onClickCheckbox={onAddId}
        selected={selectedIds}
      />
    </div>
  );
};
