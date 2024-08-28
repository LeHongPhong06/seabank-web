import BannerProduct from "@/common/product/components/BannerProduct";
import BlockContainer from "@/components/wappers/BlockContainer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutProductPage: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <BlockContainer blockStyles='bg-white !px-0 md:py-12'>
        <BannerProduct />
      </BlockContainer>
      {children}
    </React.Fragment>
  );
};

export default LayoutProductPage;
