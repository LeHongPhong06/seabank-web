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
};

const BlockContainer: React.FC<Props> = ({
  children,
  isFullWidth,
  blockStyles = "",
  flex,
  hiddenInDesktop,
  hiddenInMobile,
  hiddenInTablet,
}) => {
  return (
    <section
      className={`m-auto block-app ${clsx({
        "hidden md:block": hiddenInMobile,
        "hidden lg:block xl:hidden": hiddenInTablet,
        "xl:hidden": hiddenInDesktop,
        "w-full": isFullWidth,
        "px-primary": !isFullWidth,
        "xl:px-0": true,
        [blockStyles]: typeof blockStyles === "string",
      })}`}
    >
      <div
        className={`h-full ${clsx({
          "max-w-primary": !isFullWidth,
          "mx-auto": true,
          flex: flex,
          "justify-center": flex,
        })}`}
      >
        {children}
      </div>
    </section>
  );
};

export default BlockContainer;
