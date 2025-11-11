import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { FunctionComponent } from "react";

type Props = {
  externalName?: string;
};

const ARROW_SIZE = 16;

export const SortPopup: FunctionComponent<Props> = (props) => {
  const { externalName } = props;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        externalName
      )}
    >
      <ArrowUpDown size={ARROW_SIZE} />
      <strong>Сортировка: </strong>
      <strong className="text-primary">популярное</strong>
    </div>
  ); 
};
