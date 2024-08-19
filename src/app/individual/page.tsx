"use client";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonLink from "@/components/buttons/ButtonLink";
import CardIncentives from "@/components/cards/CardIncentives";
import CardIndividual from "@/components/cards/CardIndividual";
import TabsComponent from "@/components/tabs/TabsComponent";
import TitleComponent from "@/components/TitleComponent";
import ToolbarCompareCard from "@/components/toolbars/ToolbarCompareCard";
import WapperContainer from "@/components/wappers/WapperContainer";
import { useCard, useCardDispatch } from "@/context/card";
import { dataCards } from "@/data/card";
import { dataIncentives } from "@/data/endow";
import { useBreakpointScreen } from "@/hooks/breakpoint";
import { CaretDownOutlined, CreditCardOutlined, FilterOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const IndividualPage: React.FC = () => {
  const router = useRouter();
  const cardSelects = useCard();
  const cardDispatch = useCardDispatch();
  const [cardType, setCardType] = useState<number>(1);
  const [isMobile, isTablet] = useBreakpointScreen();
  const isChooseMobile = isMobile && (cardSelects || []).length > 1;
  const isChooseTablet = isTablet && (cardSelects || []).length > 2;

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
    <section className='bg-white'>
      <WapperContainer>
        <div className='md:py-12'>
          <div className='h-[454px] w-full md:p-0 p-4 bg-banner md:bg-banner-tablet bg-no-repeat bg-cover bg-center md:rounded-xl'>
            <div className='flex flex-col gap-4 justify-between md:justify-center md:px-24 rounded-xl md:max-w-[606px] pt-6 md:pt-0 px-4 h-full bg-[linear-gradient(180deg,_#FFF_15.27%,_rgba(255,_255,_255,_0.00)_47.83%)] md:bg-[linear-gradient(180deg,_#E0E0E0_0%,_#CDD2D8_100%)] md:[clip-path:polygon(97%_0,_93%_37%,_100%_86%,_96%_100%,_45%_100%,_0_100%,_0_0)]'>
              <div className='flex flex-col gap-2'>
                <p className='text-[22px] md:text-[32px] text-black font-bold'>Thẻ</p>
                <p className='text-sm md:text-base leading-[22px] text-black'>
                  Khám phá sản phẩm thẻ yêu thích hoặc lựa chọn nhanh nhờ tính năng so sánh và gợi ý dựa trên nhu cầu
                  của bạn
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
                  styles='flex-1 font-medium text-base min-h-[42px]'
                />
              </div>
            </div>
          </div>
        </div>
        <section className='px-4 pb-0 md:pb-4 flex flex-col gap-4'>
          <TitleComponent subTitle='Danh sách' title='Sản phẩm' />
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
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {dataCards.map((item) => {
              const isSelectItem = cardSelects?.find((card) => card.id === item.id);
              return (
                <CardIndividual
                  key={item.id}
                  disabled={isChooseMobile || isChooseTablet}
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
          disableSelect={isChooseMobile || isChooseTablet}
          onCompare={() => router.push("/individual/compare")}
          cardSelects={cardSelects || []}
          onCancel={() => cardDispatch?.({ type: "clear" })}
          onDeleteItem={(id) => cardDispatch?.({ type: "change", payload: { id } })}
        />
      )}
    </section>
  );
};

export default IndividualPage;
