"use client";
import card1 from "@/assets/images/cards/card-1.svg";
import card2 from "@/assets/images/cards/card-2.svg";
import card3 from "@/assets/images/cards/card-3.svg";
import icon from "@/assets/images/icons/mingcute.svg";
import TabsCategoryProduct from "@/components/tabs/TabsCategoryProduct";
import { TabsProps } from "antd/lib";
import Image from "next/image";
import React from "react";

type Props = {};

const IndividualPage = (props: Props) => {
  const dataCards = [
    {
      id: 1,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: card1,
    },
    {
      id: 2,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: card2,
    },
    {
      id: 3,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: card3,
    },
  ];
  const dataCategory: TabsProps["items"] = [
    {
      key: "1",
      label: "Thẻ ghi nợ nội địa",
      children: <ChildrenTabs data={dataCards} />,
    },
    {
      key: "2",
      label: "Thẻ ghi nợ quốc tế",
    },
    {
      key: "3",
      label: "Thẻ tín dụng quốc tế",
    },
    {
      key: "4",
      label: "Ưu đãi nổi bật",
    },
  ];
  return (
    <section className='bg-white'>
      <div></div>
      <section className='p-4 flex flex-col gap-4'>
        <p>
          <span>Danh sách</span>
          <span>Sản phẩm</span>
        </p>
        <TabsCategoryProduct items={dataCategory} />
      </section>
    </section>
  );
};

type TabItemProps = {
  data: Array<any>;
  onRegister?: () => void;
  onCompase?: (id: number) => void;
};
const ChildrenTabs: React.FC<TabItemProps> = ({ data, onRegister, onCompase }) => {
  return (
    <section className='flex flex-wrap gap-4 justify-center'>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className='p-4 rounded-xl border-solid border-[1px] border-gray flex flex-col max-w-[311px]'
          >
            <div className='relative w-full h-[220px]'>
              <Image alt={`image-card-${item.id}`} fill src={item.image} className='object-contain' />
            </div>
            <h3 className='text-[18px] text-black'>{item.title}</h3>
            {item.remuneration.map((remu: string) => (
              <div className='flex gap-2' key={remu}>
                <div className='relative size-4'>
                  <Image src={icon} fill alt='icon-remu' className='object-contain' />
                </div>
                <p className='text-gray-text'>{remu}</p>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};
export default IndividualPage;
