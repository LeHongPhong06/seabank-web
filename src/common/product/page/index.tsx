"use client";
import ProductModal from "@/components/modals/ProductModal";
import TitleComponent from "@/components/TitleComponent";
import BlockContainer from "@/components/wappers/BlockContainer";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import _ from "lodash";
import React, { useContext } from "react";
import ButtonListCategoryProduct from "../components/ButtonListCategoryProduct";
import ListIncentives from "../components/ListIncentives";
import ListProduct from "../components/ListProduct";
import TabsCategoryProduct from "../components/TabsCategoryProduct";
import ToolbarCompareProduct from "../components/ToolbarCompareProduct";

type GroupProductPageProps = {
  productData: Array<any>;
  incentivesData: Array<any>;
};
const GroupProductPage: React.FC<GroupProductPageProps> = ({ incentivesData, productData }) => {
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const { productListCompares } = state;
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const isChooseMobile = isMobile && productListCompares.length > 1;
  const isChooseTablet = !isMobile && productListCompares.length > 2;

  return (
    <main>
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
        <ListProduct
          disabledCompare={isChooseMobile || isChooseTablet}
          onSelectCompare={(product) =>
            dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })
          }
          onRegister={() =>
            dispatch?.({
              type: "changeModalSupport",
              payload: { modalCustomerSupport: true },
            })
          }
          productList={productData}
          productListCompare={state.productListCompares}
        />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white md:bg-gray'>
        <ListIncentives incentivesData={incentivesData} />
      </BlockContainer>
      <ProductModal />
      <ToolbarCompareProduct
        productListCompare={state.productListCompares}
        onCompare={() => {}}
        onRemoveItem={(product) => dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })}
        onCancelCompare={() => dispatch?.({ type: "clearProductCompares", payload: {} })}
        disabledCompare={isChooseMobile || isChooseTablet}
      />
    </main>
  );
};

export default GroupProductPage;
