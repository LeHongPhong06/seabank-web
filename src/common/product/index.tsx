"use client";
import ProductModal from "@/components/modals/ProductModal";
import TitleComponent from "@/components/TitleComponent";
import BlockContainer from "@/components/BlockContainer";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import _ from "lodash";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import ButtonListCategoryProduct from "./components/ButtonListCategoryProduct";
import ListProduct from "./components/ListProduct";
import ListIncentives from "./components/ListIncentives";
import ToolbarCompareProduct from "./components/ToolbarCompareProduct";
import TabsCategoryProduct from "./components/TabsCategoryProduct";
import BannerProduct from "./components/BannerProduct";
import ButtonLink from "@/components/buttons/ButtonLink";

type GroupProductPageProps = {
  productData: Array<any>;
  incentivesData: Array<any>;
};
const GroupProductPage: React.FC<GroupProductPageProps> = ({ incentivesData, productData }) => {
  const router = useRouter();
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const { productListCompares } = state;
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const isChooseMobile = isMobile && productListCompares.length > 1;
  const isChooseTablet = !isMobile && productListCompares.length > 2;

  return (
    <main>
      <BlockContainer blockStyles='bg-white !px-0 md:py-12'>
        <BannerProduct />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white'>
        <BlockContainer blockStyles='bg-white pt-4 md:pt-0'>
          <TitleComponent title='Danh sách Sản phẩm' />
        </BlockContainer>
        <BlockContainer blockStyles='bg-white font-semibold' hiddenInTablet>
          <TabsCategoryProduct />
        </BlockContainer>
        <BlockContainer blockStyles='bg-white pb-6 pt-4' hiddenInMobile>
          <ButtonListCategoryProduct />
        </BlockContainer>
        <BlockContainer blockStyles='pb-12'>
          <ListProduct
            disabledCompare={isChooseMobile || isChooseTablet}
            onSelectCompare={(product) =>
              dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })
            }
            onRegister={() =>
              dispatch?.({
                type: "changeModalBusiness",
                payload: { modalBusinessRegister: true },
              })
            }
            productList={productData}
            productListCompare={state.productListCompares}
          />
        </BlockContainer>
      </BlockContainer>
      <BlockContainer blockStyles='bg-white md:bg-gray pt-12'>
        <BlockContainer flex spaceBetween blockStyles='pb-6'>
          <TitleComponent title='Ưu đãi liên quan' />
          <ButtonLink title='Xem tất cả' />
        </BlockContainer>
        <ListIncentives incentivesData={incentivesData} />
      </BlockContainer>
      <ProductModal />
      <ToolbarCompareProduct
        productListCompare={state.productListCompares}
        onCompare={() => router.push("/ca-nhan/san-pham-dich-vu/the/so-sanh-san-pham")}
        onRemoveItem={(product) => dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })}
        onCancelCompare={() => dispatch?.({ type: "clearProductCompares", payload: {} })}
        disabledCompare={isChooseMobile || isChooseTablet}
      />
    </main>
  );
};

export default GroupProductPage;
