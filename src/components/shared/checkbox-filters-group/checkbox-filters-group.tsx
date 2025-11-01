"use client";

import { DEFAULT_FILTERS_LIMIT } from "@/components/shared/filters/filters";
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { CheckboxField } from "@/components/types/checkbox.type";
import { Input } from "@/components/ui";
import { ChangeEvent, FunctionComponent, useState } from "react";

type Item = CheckboxField;

type Props = {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  obChange?: (selectedItems: Item[]) => void;
  defaultSelectedItems?: Item[];
  externalClass?: string;
};

export const CheckboxFiltersGroup: FunctionComponent<Props> = (props) => {
  const {
    title,
    items,
    defaultItems,
    limit = DEFAULT_FILTERS_LIMIT,
    searchInputPlaceholder = "Search... ",
    obChange,
    defaultSelectedItems,
    externalClass,
  } = props;

  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const allItems = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);
 
  const onShowAllToggle = () => {
    setShowAll(!showAll);
  };

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={externalClass}>
      <p className="font-bold mb-3">{title}</p>

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
            onCheckedChange={item.onCheckedChange}
            checked={item.checked}
            name={item.name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={onShowAllToggle}
            className="text-(--text-orange) mt-3"
          >
            {showAll ? "Скрыть" : "+ По казать все"}
          </button>
        </div>
      )}
    </div>
  );
};
