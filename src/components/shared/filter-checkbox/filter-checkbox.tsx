import { CheckboxField } from "@/components/types/checkbox.type";
import { Checkbox } from "@/components/ui";
import { FunctionComponent } from "react";

type Props = CheckboxField;

export const FilterCheckbox: FunctionComponent<Props> = (props) => {
  const { text, value, endAdornment, onCheckedChange, checked, name } = props;

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-lg w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
