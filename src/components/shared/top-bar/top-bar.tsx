import { Categories, Container, SortPopup } from "@/components/shared";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

type Props = {
  externalClass?: string;
};

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];

export const TopBar: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        externalClass
      )}
    >
      <Container externalClass="flex items-center justify-between ">
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
