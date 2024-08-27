"use client";
import { FilterOutlined } from "@ant-design/icons";
import { useState } from "react";
import TitleComponent from "../TitleComponent";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonDefault from "../buttons/ButtonDefault";
import TabsComponent from "../tabs/TabsComponent";
type Props = {};

const ProductCategory = (props: Props) => {
  const [cardType, setCardType] = useState<number>(1);
  const dataCategory = [
    {
      key: 1,
      label: "Thẻ ghi nợ nội địa",
    },
    {
      key: 2,
      label: "Thẻ ghi nợ quốc tế",
    },
    {
      key: 3,
      label: "Thẻ tín dụng quốc tế",
    },
    {
      key: 4,
      label: "Ưu đãi nổi bật",
    },
  ];
  return (
    <section className='px-4 pt-4 md:pt-0 md:pb-12 flex flex-col gap-4 md:gap-6'>
      <div className='flex flex-col gap-4'>
        <TitleComponent title='Danh sách Sản phẩm' />
        <TabsComponent data={dataCategory} onSelect={(key) => setCardType(key)} idSelect={cardType} />
        <div className='flex justify-between items-center gap-4'>
          <div className='hidden md:flex gap-4 flex-wrap'>
            {dataCategory.map((item) => {
              const isCardTypeSelect = cardType === item.key;
              return (
                <ButtonComponent
                  title={item.label}
                  key={item.key}
                  styles={{ fontWeight: 500 }}
                  active={isCardTypeSelect}
                  onClick={() => setCardType(item.key)}
                />
              );
            })}
          </div>
          <div className='hidden md:block'>
            <ButtonDefault
              title={"Bộ lọc"}
              preffix={<FilterOutlined className='text-black' />}
              styles={{ textWrap: "nowrap", minWidth: 110, fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
