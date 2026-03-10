"use client";

import { DEFAULT_FILTERS_LIMIT } from "@/components/shared/filters/filters";
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { CheckboxField } from "@/components/types/checkbox.type";
import { Input, Skeleton } from "@/components/ui";
import { ChangeEvent, FunctionComponent, useState } from "react";

type Item = CheckboxField;

type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  selected?: Set<string>;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultSelectedItems?: Item[];
  className?: string;
  name?: string;
};

export const CheckboxFiltersGroup: FunctionComponent<Props> = (props) => {
  const {
    title,
    items,
    defaultItems,
    limit = DEFAULT_FILTERS_LIMIT,
    selected,
    searchInputPlaceholder = "Search... ",
    defaultSelectedItems,
    className,
    name,
    onClickCheckbox,
  } = props;

  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const loading = items.length === 0;

  const allItems = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems ?? items).slice(0, limit);

  const onShowAllToggle = () => {
    setShowAll(!showAll);
  };

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {Array.from({ length: limit }).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-4 rounded-md" />
        ))}

        <Skeleton className="w-28 h-6 mb-4 rounded-md" />
      </div>
    );
  }

  return (
    <div className={className}>
      {title ? <p className="font-bold mb-3">{title}</p> : null}

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {allItems.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selected?.has(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={onShowAllToggle} className="text-primary mt-3">
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
