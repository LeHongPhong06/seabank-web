"use client";
import card1 from "@/assets/images/cards/card-1.svg";
import card2 from "@/assets/images/cards/card-2.svg";
import card3 from "@/assets/images/cards/card-3.svg";
import icon from "@/assets/images/icons/mingcute.svg";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import TitleComponent from "@/components/TitleComponent";
import ToolbarCompareCard from "@/components/toolbars/ToolbarCompareCard";
import WapperContainer from "@/components/wappers/WapperContainer";
import { CheckOutlined, CreditCardOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const IndividualPage = (props: Props) => {
  const [cardSelectIds, setCardSelectIds] = useState<Array<number>>([]);
  const [cardType, setCardType] = useState<string>("1");
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
      title: "Thẻ tín dụng quốc tế SeABank Visa Platinum",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: card2,
    },
    {
      id: 3,
      title: "Thẻ tín dụng quốc tế SeALady Cashback ( Visa/MasterCard) ",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: card3,
    },
    {
      id: 4,
      title: "Thẻ tín dụng quốc tế SeA-Easy",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2021-09/THE_ANH%20WEB%202020_nen_637x245-04_0.jpg",
    },
    {
      id: 5,
      title: "Thẻ tín dụng BRG Elite",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
    },
    {
      id: 6,
      title: "Thẻ tín dụng BRG Golf SeABank",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-10/THE_ANH%20WEB%202020_nen_637x245-16.jpg",
    },
    {
      id: 7,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2021-05/THE_ANH-WEB-2020_nen_637x245.jpg",
    },
    {
      id: 8,
      title: "Thẻ ghi nợ SeABank MasterCard Gold",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-02.jpg",
    },
    {
      id: 9,
      title: "Thẻ ghi nợ SeABank Visa Gold",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-02.jpg",
    },
  ];
  const onChangeItemCompare = (cardId: number) => {
    const data = [...cardSelectIds];
    if (data.includes(cardId)) {
      const index = data.findIndex((item) => item === cardId);
      if (index !== -1) {
        data.splice(index, 1);
      }
    } else {
      data.push(cardId);
    }
    setCardSelectIds(data);
  };
  const dataCategory = [
    {
      key: "1",
      label: "Thẻ ghi nợ nội địa",
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
      <WapperContainer>
        <section className='p-4 flex flex-col gap-4'>
          <TitleComponent subTitle='Danh sách' title='Sản phẩm' />
          <div className='flex overflow-x-scroll scrollbar-none gap-4 border-b-[1px] border-solid border-gray'>
            {dataCategory.map((item) => {
              const isCardTypeSelect = cardType === item.key;
              return (
                <div key={item.key}>
                  <p
                    onClick={() => setCardType(item.key)}
                    className={`relative pb-3 text-base text-nowrap before:w-full hover:cursor-pointer z-50 ${
                      isCardTypeSelect
                        ? "text-black font-semibold before:h-[2px] before:absolute before:bg-gradient-primary before:bottom-0"
                        : "text-gray font-medium"
                    } `}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {dataCards.map((item) => {
              const isSelectItem = cardSelectIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`p-[1px] ${
                    isSelectItem ? "bg-gradient-primary" : "bg-gray"
                  }  rounded-xl w-full hover:shadow-card`}
                >
                  <div className='p-4 h-full w-full gap-3 flex flex-col bg-white rounded-xl'>
                    <div className='relative w-full min-h-[220px] h-full rounded-xl'>
                      <Image alt={`image-card-${item.id}`} fill src={item.image} className='object-cover rounded-xl' />
                    </div>
                    <h3 className='text-[18px] text-black font-semibold lg:min-h-[44px]'>{item.title}</h3>
                    {item.remuneration.map((remu: string) => (
                      <div className='flex gap-2 items-start' key={remu}>
                        <div className='min-w-4 pt-1'>
                          <div className='relative w-full h-4'>
                            <Image src={icon} fill alt='icon-remu' className='object-contain' />
                          </div>
                        </div>
                        <p className='text-gray-text'>{remu}</p>
                      </div>
                    ))}
                    <div className='flex gap-3 min-h-[42px]'>
                      <ButtonCard
                        active={isSelectItem}
                        title='So sánh'
                        onClick={() => onChangeItemCompare(item.id)}
                        styles={{ flex: 1 }}
                        preffix={
                          isSelectItem ? (
                            <div className='bg-gradient-primary size-6 flex justify-center items-center rounded-full'>
                              <CheckOutlined className='text-white text-xs' />
                            </div>
                          ) : (
                            <div className='size-6 border-[1px] border-solid border-gray-text bg-transparent rounded-full' />
                          )
                        }
                      />
                      <ButtonComponent
                        preffix={<CreditCardOutlined className='text-base' />}
                        active
                        title='Đăng ký thẻ'
                        styles={{ flex: 1 }}
                        textStyles={{ fontSize: 16 }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <ButtonComponent
              title='Xem thêm'
              styles={{
                height: 48,
              }}
            />
          </section>
        </section>
      </WapperContainer>
      <WapperContainer>
        <div>
          <TitleComponent subTitle='Nỗi Bật' title='Ưu Đãi' styles={{ flexDirection: "row-reverse" }} />
        </div>
      </WapperContainer>
      {cardSelectIds.length > 0 && (
        <ToolbarCompareCard dataCard={dataCards} cardSelectIds={cardSelectIds} onDeleteItem={onChangeItemCompare} />
      )}
    </section>
  );
};

export default IndividualPage;
