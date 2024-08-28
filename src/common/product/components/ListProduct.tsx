import ButtonComponent from "@/components/buttons/ButtonComponent";
import CardIndividual from "@/components/cards/CardIndividual";
import { CaretDownOutlined } from "@ant-design/icons";
import React from "react";

type ListProductProps = {
  productListCompare: Array<any>;
  disabledCompare?: boolean;
  productList: Array<any>;
  onSelectCompare: (product: any) => void;
  onRegister: (product: any) => void;
};

const ListProduct: React.FC<ListProductProps> = ({
  productList,
  onSelectCompare,
  onRegister,
  productListCompare,
  disabledCompare,
}) => {
  return (
    <section className='flex flex-col gap-4 md:gap-6'>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        {productList.map((item) => {
          const isSelectItem = productListCompare.find((card) => card?.id === item.id);
          return (
            <CardIndividual
              key={item.id}
              disabled={disabledCompare}
              data={item}
              onRegister={() => onRegister(item)}
              isSelect={isSelectItem ? true : false}
              onCompare={() => onSelectCompare(item)}
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
