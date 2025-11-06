"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { FunctionComponent } from "react";

type categoriesProps = {
  categories: { id: number; name: string }[];
  externalClass?: string;
};

export const Categories: FunctionComponent<categoriesProps> = (props) => {
  const { categories, externalClass } = props;

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
        externalClass
      )}
    >
      {categories.map((category, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center f. ont-bold h-11 rounded-2xl px-5",
            categoryActiveId === category.id &&
              "bg-white shadow-md shadow-gray-200 text-(--text-orange)"
          )}
          href={`/#${category.name}`}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
