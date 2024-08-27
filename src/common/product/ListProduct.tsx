"use client";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import CardIndividual from "@/components/cards/CardIndividual";
import { ProductContext } from "@/context/product";
import { CaretDownOutlined } from "@ant-design/icons";
import React, { useContext } from "react";

type Props = {
  productList: Array<any>;
};

const ListProduct: React.FC<Props> = ({ productList }) => {
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  return (
    <section className='px-4 pt-4 md:pt-0 md:pb-12 flex flex-col gap-4 md:gap-6'>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        {productList.map((item) => {
          const isSelectItem = state?.productListCompares.find((card) => card?.id === item.id);
          return (
            <CardIndividual
              key={item.id}
              // disabled={isChooseMobile || isChooseTablet}
              data={item}
              onRegister={() =>
                dispatch?.({
                  type: "changeModalIndividual",
                  payload: { modalIndividualRegister: true },
                })
              }
              isSelect={isSelectItem ? true : false}
              onCompare={() => dispatch?.({ type: "changeProductCompare", payload: { productCompare: item } })}
            />
          );
        })}
        <div className='block md:hidden'>
          <ButtonComponent title='Xem thêm' styles={{ height: 48, width: "100%" }} affix={<CaretDownOutlined />} />
        </div>
      </section>
    </section>
  );
};

export default ListProduct;
