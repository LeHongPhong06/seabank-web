import { clsx } from "clsx";
import React from "react";

type Props = {
  blockStyles?: string;
  children?: React.ReactNode;
  hiddenInMobile?: boolean;
  hiddenInDesktop?: boolean;
  hiddenInTablet?: boolean;
  isFullWidth?: boolean;
  flex?: boolean;
  spaceBetween?: boolean;
};

const BlockContainer: React.FC<Props> = ({
  children,
  isFullWidth,
  blockStyles = "",
  flex,
  hiddenInDesktop,
  hiddenInMobile,
  hiddenInTablet,
  spaceBetween,
}) => {
  return (
    <section
      className={`m-auto block-app ${clsx({
        "hidden md:block": hiddenInMobile,
        "md:hidden sm:block": hiddenInTablet,
        "xl:hidden block": hiddenInDesktop,
        "w-full": isFullWidth,
        "px-4": !isFullWidth,
        "xl:px-0": true,
        [blockStyles]: typeof blockStyles === "string",
      })}`}
    >
      <div
        className={`h-full ${clsx({
          "max-w-[1440px]": !isFullWidth,
          "mx-auto": !isFullWidth,
          flex: flex,
          "justify-center": flex,
          "justify-between": spaceBetween,
        })}`}
      >
        {children}
      </div>
    </section>
  );
};

export default BlockContainer;
