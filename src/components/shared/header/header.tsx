import { cn } from "@/lib/utils";
import { FC, FunctionComponent } from "react";

type Props = {
  externalClass?: string;
};

export const header: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;

  return <header className={cn("border border-b ", externalClass)}>header</header >;
};
