import ToolbarCompareProduct from "@/common/product/ToolbarCompareProduct";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutProductPage: React.FC<Props> = ({ children }) => {
  return (
    <section>
      {children}
      {/* <ToolbarCompareProduct /> */}
    </section>
  );
};

export default LayoutProductPage;
