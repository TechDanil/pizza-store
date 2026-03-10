import { cn } from "@/shared/lib/utils";
import { FunctionComponent, PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export const Container: FunctionComponent<Props> = (props) => {
  const { className, children } = props;

  return (
    <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>
  );
};
