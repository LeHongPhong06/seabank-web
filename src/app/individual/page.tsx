import BannerProduct from "@/common/product/BannerProduct";
import ListIncentives from "@/common/product/ListIncentives";
import ListProduct from "@/common/product/ListProduct";
import ToolbarCompareProduct from "@/common/product/ToolbarCompareProduct";
import ProductModal from "@/components/modals/ProductModal";
import WapperContainer from "@/components/wappers/WapperContainer";
import { dataCards } from "@/data/card";
import { dataIncentives } from "@/data/endow";
import React from "react";

const IndividualPage: React.FC = () => {
  return (
    <React.Fragment>
      <section className='bg-white'>
        <WapperContainer>
          <div className='md:py-12 md:px-4'>
            <BannerProduct />
          </div>
          <ListProduct productList={dataCards} />
        </WapperContainer>
        <div className='bg-white md:bg-gray'>
          <WapperContainer>
            <ListIncentives incentivesData={dataIncentives} />
          </WapperContainer>
        </div>
      </section>
      <ToolbarCompareProduct productList={dataCards} />
      <ProductModal />
    </React.Fragment>
  );
};

export default IndividualPage;
