"use client";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import TitleComponent from "@/components/TitleComponent";
import { FilterOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const ButtonListCategoryProduct = (props: Props) => {
  const params = useParams();
  //   const {} = params;
  const dataCategory = [
    {
      key: "the-ghi-no-noi-dia",
      label: "Thẻ ghi nợ nội địa",
    },
    {
      key: "the-ghi-no-quoc-te",
      label: "Thẻ ghi nợ quốc tế",
    },
    {
      key: "the-tin-dung-quoc-te",
      label: "Thẻ tín dụng quốc tế",
    },
    {
      key: "uu-dai-noi-bat",
      label: "Ưu đãi nổi bật",
    },
  ];
  return (
    <React.Fragment>
      <div className='flex justify-between items-center gap-4'>
        <div className='hidden md:flex gap-4 flex-wrap'>
          {dataCategory.map((item) => {
            //   const isCardTypeSelect = params === item.key;
            return (
              <ButtonComponent
                title={item.label}
                key={item.key}
                styles={{ fontWeight: 500 }}
                //   active={isCardTypeSelect}
                //   onClick={() => setCardType(item.key)}
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
    </React.Fragment>
  );
};

export default ButtonListCategoryProduct;
