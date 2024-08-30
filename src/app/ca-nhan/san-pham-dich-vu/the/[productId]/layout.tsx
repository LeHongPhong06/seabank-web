import BannerProduct from "@/common/product/components/BannerProduct";
import ButtonListCategoryProductDetail from "@/common/productDetail/components/ButtonListCategoryProductDetail";
import TabsProductDetail from "@/common/productDetail/components/TabsProductDetail";
import BlockContainer from "@/components/BlockContainer";
import TitleComponent from "@/components/TitleComponent";
import React from "react";

const LayoutProductDetailPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <BlockContainer blockStyles='bg-white !px-0 md:py-12'>
        <BannerProduct />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white pt-6'>
        <TitleComponent title='Chi tiết thông tin' />
      </BlockContainer>
      <BlockContainer hiddenInTablet blockStyles='bg-white'>
        <TabsProductDetail />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white pb-6 pt-4' hiddenInMobile>
        <ButtonListCategoryProductDetail />
      </BlockContainer>
      {children}
    </section>
  );
};

export default LayoutProductDetailPage;
