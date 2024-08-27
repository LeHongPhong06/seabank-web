import { ProductContext } from "@/context/product";
import { getBreakpointCurrent } from "@/hooks/breakpoint";
import { CaretDownOutlined } from "@ant-design/icons";
import _ from "lodash";
import React, { useContext } from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import CardIndividual from "../cards/CardIndividual";

type Props = {
  data: Array<any>;
};

const ProductList: React.FC<Props> = ({ data }) => {
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const isMobile = _.includes(["xs", "sm"], getBreakpointCurrent());
  const isChooseMobile = isMobile && (state?.productListCompares || []).length > 1;
  const isChooseTablet = !isMobile && (state?.productListCompares || []).length > 2;
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
      {data.map((item) => {
        const isSelectItem = state?.productListCompares.find((card) => card?.id === item.id);
        return (
          <CardIndividual
            key={item.id}
            disabled={isChooseMobile || isChooseTablet}
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
  );
};

export default ProductList;
