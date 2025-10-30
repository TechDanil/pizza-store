import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

type categoriesProps = {
  categories: string[];
  externalClass?: string;
};

const activeIndex = 0;

export const Categories: FunctionComponent<categoriesProps> = (props) => {
  const { categories, externalClass } = props;

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
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-(--text-orange)"
          )}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
