import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { Title } from "../title/title";
import { FunctionComponent } from "react";

type Props = {
  externalClass?: string;
};

export const Filters: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  return (
    <div className={externalClass}>
      <Title text="Фильтрация" size="sm" externalClass="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
};
