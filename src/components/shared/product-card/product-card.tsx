import { Title } from "@/components/shared/title/title";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  externalClass?: string;
};

const PLUS_ICON_SIZE = 20;

export const ProductCard: FunctionComponent<Props> = (props) => {
  const { id, name, price, imgUrl, externalClass } = props;

  return (
    <div className={externalClass}>
      <Link href={`/product/${id}`} />

      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imgUrl} alt={name} />
      </div>

      <Title text={name} size="sm" externalClass="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">some ingredients</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <strong>{price} ₽</strong>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={PLUS_ICON_SIZE} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};
