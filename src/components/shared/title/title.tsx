import clsx from "clsx";
import { createElement, FunctionComponent } from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type Props = {
  size?: TitleSize;
  externalClass?: string;
  text: string;
};

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
} as const;

const mapClassNameBySize = {
  xs: "text-[16px]",
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
} as const;

export const Title: FunctionComponent<Props> = (props) => {
  const { size = "md", externalClass, text } = props;

  return createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], externalClass) },
    text
  );
};
