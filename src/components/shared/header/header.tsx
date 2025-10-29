import { Container } from "@/components/shared/container/container";
import { cn } from "@/lib/utils";
import { FC, FunctionComponent } from "react";
import Image from "next/image";

type Props = {
  externalClass?: string;
};

const LOGO_WIDTH = 35;
const LOGO_HEIGHT = 35;

export const Header: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  return (
    <header className={cn("border-b text-(--text-grey)", externalClass)}>
      <Container externalClass="flex items-center justify-between py-8">
        <div>
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
      </Container>
    </header>
  );
};
