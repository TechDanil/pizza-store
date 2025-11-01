import { Input } from "@/components/ui";
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox";
import { Title } from "../title/title";
import { FunctionComponent } from "react";
import { RangeSlider } from "../range-slider/range-slider";

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

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex mb-5 gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={3000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="300 0"
            min={100}
            max={3000}
            defaultValue={0}
          />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
    </div>
  );
};
