"use client";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonLink from "@/components/buttons/ButtonLink";
import CardIncentives from "@/components/cards/CardIncentives";
import CardIndividual from "@/components/cards/CardIndividual";
import TitleComponent from "@/components/TitleComponent";
import ToolbarCompareCard from "@/components/toolbars/ToolbarCompareCard";
import WapperContainer from "@/components/wappers/WapperContainer";
import { useCard, useCardDispatch } from "@/context/card";
import { CaretDownOutlined, CreditCardOutlined, FilterOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TabsItemProps = {
  data: { key: string; label: string };
  active: boolean;
  onSelect: (key: string) => void;
};
const IndividualPage: React.FC = () => {
  const router = useRouter();
  const cardSelects = useCard();
  const cardDispatch = useCardDispatch();
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
      image: "https://cdn.seabank.com.vn/sites/default/files/2023-09/Th%E1%BA%BB%20S24%2B%2B.png",
    },
    {
      id: 2,
      title: "Thẻ tín dụng quốc tế SeABank Visa Platinum",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-05.jpg",
    },
    {
      id: 3,
      title: "Thẻ tín dụng quốc tế SeALady Cashback ( Visa/MasterCard) ",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-10.jpg",
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
  const dataIncentives = [
    {
      id: 1,
      title: "Giảm ngay 20.000VNĐ cho đơn hàng từ 40.000VNĐ tại Bmart",
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
      startDate: 1721322000000,
      endDate: 1737219600000,
    },
    {
      id: 2,
      title: "Giảm ngay 20.000VNĐ cho đơn hàng từ 40.000VNĐ tại Bmart",
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
      startDate: 1721322000000,
      endDate: 1737219600000,
    },
    {
      id: 3,
      title: "Giảm ngay 20.000VNĐ cho đơn hàng từ 40.000VNĐ tại Bmart",
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
      startDate: 1721322000000,
      endDate: 1737219600000,
    },
    {
      id: 4,
      title: "Giảm ngay 20.000VNĐ cho đơn hàng từ 40.000VNĐ tại Bmart",
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
      startDate: 1721322000000,
      endDate: 1737219600000,
    },
    {
      id: 5,
      title: "Giảm ngay 20.000VNĐ cho đơn hàng từ 40.000VNĐ tại Bmart",
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
      startDate: 1721322000000,
      endDate: 1737219600000,
    },
  ];

  return (
    <section className='bg-white'>
      <div className='bg-gray relative'>
        <div className='p-4 h-[454px]'>
          <div className='pt-6 flex flex-col justify-between rounded-lg px-4 h-full bg-[linear-gradient(180deg,_#FFF_15.27%,_rgba(255,_255,_255,_0.00)_47.83%)]'>
            <div className='flex flex-col gap-2'>
              <p className='text-[22px] text-black font-bold'>Thẻ</p>
              <p className='text-sm text-black'>
                Khám phá sản phẩm thẻ yêu thích hoặc lựa chọn nhanh nhờ tính năng so sánh và gợi ý dựa trên nhu cầu của
                bạn
              </p>
            </div>
            <div className='flex gap-4 max-h-[42px] z-20'>
              <ButtonComponent
                title='Đăng ký'
                preffix={<CreditCardOutlined />}
                styles={{ width: "50%", fontWeight: 500, fontSize: 16 }}
                active
              />
              <ButtonCard
                title='Ưu đãi'
                preffix={<CreditCardOutlined className='text-red' />}
                active
                styles={{ flex: 1, fontWeight: 500, fontSize: 16 }}
              />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-[300px] bg-cover bg-banner-card bg-[right_-125px_bottom_0px] bg-no-repeat' />
      </div>
      <WapperContainer>
        {/* <div className='relative w-full h-[400px] bg-white rounded-3xl'>
          <div className='z-20 absolute top-0 bottom-0 left-0 w-[606px] bg-[linear-gradient(180deg,_#E0E0E0_0%,_#CDD2D8_100%)] [clip-path:polygon(50%_0%,_94%_0,_88%_35%,_100%_88%,_93%_100%,_0_100%,_0_0)]'>
            <div className='flex flex-col justify-between rounded-lg'>
              <div className='flex flex-col gap-2'>
                <p className='text-[22px] text-black font-bold'>Thẻ</p>
                <p className='text-sm text-black'>
                  Khám phá sản phẩm thẻ yêu thích hoặc lựa chọn nhanh nhờ tính năng so sánh và gợi ý dựa trên nhu cầu
                  của bạn
                </p>
              </div>
              <div className='flex gap-4 max-h-[42px]'>
                <ButtonComponent
                  title='Đăng ký'
                  preffix={<CreditCardOutlined />}
                  styles={{ width: "50%", fontWeight: 500, fontSize: 16 }}
                  active
                />
                <ButtonCard
                  title='Ưu đãi'
                  preffix={<CreditCardOutlined className='text-red' />}
                  active
                  styles={{ flex: 1, fontWeight: 500, fontSize: 16 }}
                />
              </div>
            </div>
          </div>
          <Image src={banner} fill alt='banner-home-card' className='object-contain rounded-3xl' />
        </div> */}
        <section className='px-4 pt-4 pb-0 md:pb-4 flex flex-col gap-4'>
          <TitleComponent subTitle='Danh sách' title='Sản phẩm' />
          <div className='flex md:hidden overflow-x-scroll scrollbar-none gap-4 border-b-[1px] border-solid border-gray'>
            {dataCategory.map((item) => {
              const isCardTypeSelect = cardType === item.key;
              return (
                <TabsItemLabel
                  key={item.key}
                  data={item}
                  active={isCardTypeSelect}
                  onSelect={(key) => setCardType(key)}
                />
              );
            })}
          </div>
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
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {dataCards.map((item) => {
              const isSelectItem = cardSelects?.find((card) => card.id === item.id);
              return (
                <CardIndividual
                  key={item.id}
                  data={item}
                  isSelect={isSelectItem ? true : false}
                  onCompare={() => cardDispatch?.({ type: "change", payload: item })}
                />
              );
            })}
            <div className='block md:hidden'>
              <ButtonComponent title='Xem thêm' styles={{ height: 48, width: "100%" }} affix={<CaretDownOutlined />} />
            </div>
          </section>
        </section>
      </WapperContainer>
      <div className='py-6 lg:py-8 bg-white md:bg-gray'>
        <WapperContainer>
          <div className='flex justify-between px-4 mb-4 md:mb-6'>
            <TitleComponent subTitle='Nỗi Bật' title='Ưu Đãi' styles={{ flexDirection: "row-reverse" }} />
            <ButtonLink title='Xem tất cả' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
            {dataIncentives.map((item) => (
              <CardIncentives data={item} key={item.id} />
            ))}
          </div>
        </WapperContainer>
      </div>
      {(cardSelects || []).length > 0 && (
        <ToolbarCompareCard
          onCompare={() => router.push("/individual/compare")}
          cardSelects={cardSelects || []}
          onCancel={() => cardDispatch?.({ type: "clear" })}
          onDeleteItem={(id) => cardDispatch?.({ type: "change", payload: { id } })}
        />
      )}
    </section>
  );
};

const TabsItemLabel: React.FC<TabsItemProps> = ({ active, data, onSelect }) => {
  return (
    <p
      onClick={() => onSelect(data.key)}
      className={`relative pb-3 text-base text-nowrap before:w-full hover:cursor-pointer z-50 ${
        active
          ? "text-black font-semibold before:h-[2px] before:absolute before:bg-gradient-primary before:bottom-0"
          : "text-gray font-medium"
      } `}
    >
      {data.label}
    </p>
  );
};
export default IndividualPage;
