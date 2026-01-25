"use client";

import { cn } from "@/lib";
import { Search } from "lucide-react";
import { FunctionComponent, useRef, useState } from "react";
import { useClickAway } from "react-use";

type Props = {
  externalClass?: string;
};

export const SearchInput: FunctionComponent<Props> = (props) => {
  const { externalClass } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [focus, setFocus] = useState(false);

  useClickAway(ref, () => {
    setFocus(false);
  });

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <>
      {focus && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          externalClass,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={handleFocus}
        />
      </div>
    </>
  );
};
