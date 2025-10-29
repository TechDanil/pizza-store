import { cn } from "@/lib/utils";
import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
  externalClass?: string;
} & PropsWithChildren;

export const Container: FunctionComponent<Props> = (props) => {
  const { externalClass, children } = props;

  return (
    <div className={cn("mx-auto max-w-7xl", externalClass)}>{children}</div>
  );
};
