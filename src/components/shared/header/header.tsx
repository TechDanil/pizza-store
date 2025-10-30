import { Container } from "@/components/shared/container/container";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type Props = {
  externalClass?: string;
};

const SHOPPING_CART_ICON_SIZE = 16;
const USER_ICON_SIZE = 16;
const LOGO_WIDTH = 35;
const LOGO_HEIGHT = 35;

export const Header: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  return (
    <header className={cn("border-b text-(--text-grey)", externalClass)}>
      <Container externalClass="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
          />

          <div>
            <h1 className="text-2xl text-black uppercase font-black">
              Next Pizza
            </h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="cursor-pointer flex items-center rounded-2xl gap-1 border-(--button-border) text-(--text-orange)"
          >
            <User size={USER_ICON_SIZE} />
            Войти
          </Button>

          <div>
            <Button className="cursor-pointer bg-(--bg-orange) relative group">
              <strong>520p</strong>
              <span className="h-full w-px bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart
                  size={SHOPPING_CART_ICON_SIZE}
                  className="relative"
                  strokeWidth={2}
                />
                <strong>{3}</strong>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              /> 
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
