"use client";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonLink from "@/components/buttons/ButtonLink";
import CardIncentives from "@/components/cards/CardIncentives";
import CardIndividual from "@/components/cards/CardIndividual";
import QuestionCollapse from "@/components/collapse/QuestionCollapse";
import TabsComponent from "@/components/tabs/TabsComponent";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { useCard, useCardDispatch } from "@/context/card";
import { dataCards } from "@/data/card";
import { dataEndow, dataIncentives } from "@/data/endow";
import { useBreakpointScreen } from "@/hooks/breakpoint";
import { CarOutlined, CreditCardOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { useState } from "react";

type Props = {};

const CardPageDetail = (props: Props) => {
  const cardSelects = useCard();
  const cardDispatch = useCardDispatch();
  const params = useParams<{ cardId: string }>();
  const { cardId } = params;
  const [cardType, setCardType] = useState(1);
  const [isMobile, isTablet] = useBreakpointScreen();
  const isChooseMobile = isMobile && (cardSelects || []).length > 1;
  const isChooseTablet = isTablet && (cardSelects || []).length > 2;
  const btnList = [
    {
      key: 1,
      label: "Thông tin sản phẩm",
    },
    {
      key: 2,
      label: "Lợi ích",
    },
    {
      key: 3,
      label: "Điều kiện đăng ký",
    },
    {
      key: 4,
      label: "Thủ tục đăng ký",
    },
    {
      key: 5,
      label: "Biểu phí & Biểu mẫu",
    },
  ];
  const dataQuestions = [
    {
      title: "Ai có thể sử dụng dịch vụ Ngân hàng số SeABank?",
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
        <div className='px-4 pt-6'>
          <div>
            <TitleComponent
              title='Chi Tiết'
              subTitle='Thông Tin'
              styles={{
                flexDirection: "row-reverse",
                justifyContent: "start",
              }}
            />
          </div>
          <div className='py-4 md:py-[20px]'>
            <div className='md:hidden'>
              <TabsComponent data={btnList} onSelect={(key) => setCardType(key)} idSelect={cardType} />
            </div>
            <div className='md:gap-2 hidden md:flex'>
              {btnList.map((item) => {
                const isActive = cardType === item.key;
                return <ButtonComponent key={item.key} title={item.label} active={isActive} />;
              })}
            </div>
          </div>
          <div className='md:bg-hero md:bg-cover md:bg-center md:bg-no-repeat md:p-6 md:rounded-xl'>
            <h3 className='mb-2 text-black font-semibold text-[18px]'>Chi tiết ưu đãi</h3>
            <div className='flex flex-col gap-4'>
              {dataEndow.map((item) => (
                <p className='text-base leading-6 text-black' key={item.id}>
                  <span className='font-semibold'>{`Ưu đãi ${item.id}: `}</span>
                  {item.content}
                </p>
              ))}
              <div className='max-w-[400px] md:flex md:gap-4 hidden'>
                <ButtonComponent title='Đăng ký' active styles={{ flex: 1 }} preffix={<CreditCardOutlined />} />
                <ButtonCard
                  title='Ưu đãi'
                  active
                  styles='flex-1'
                  preffix={<CreditCardOutlined className='text-red' />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-6'>
          <div className='flex items-center justify-between mb-4'>
            <TitleComponent
              title='Sản Phẩm'
              subTitle='Liên Quan'
              styles={{
                flexDirection: "row-reverse",
              }}
            />
            <ButtonLink title='Xem tất cả' />
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
          </section>
        </div>
      </WapperContainer>
      <div className='bg-white md:bg-gray'>
        <WapperContainer>
          <div className='px-4 p-6 md:pt-12'>
            <div className='flex items-center justify-between mb-4'>
              <TitleComponent title='Ưu Đãi' subTitle='Liên Quan' styles={{ flexDirection: "row-reverse" }} />
              <ButtonLink title='Xem tất cả' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
              {dataIncentives.map((item) => (
                <CardIncentives data={item} key={item.id} />
              ))}
            </div>
          </div>
        </WapperContainer>
      </div>
      <div className='bg-gray-process hidden md:block'>
        <WapperContainer>
          <div className='pt-12'>
            <TitleComponent title='Các Câu Hỏi' subTitle='Liên Quan' styles={{ flexDirection: "row-reverse" }} />
            <QuestionCollapse />
          </div>
        </WapperContainer>
      </div>
    </section>
  );
};

export default CardPageDetail;
