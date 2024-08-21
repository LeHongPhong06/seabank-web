"use client";
import icon from "@/assets/images/icons/mingcute.svg";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import SelectCard from "@/components/selects/SelectCard";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { useCard, useCardDispatch } from "@/context/card";
import { dataCards } from "@/data/card";
import { useBreakpointScreen } from "@/hooks/breakpoint";
import { CloseCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CompareCardPage: React.FC = () => {
  const router = useRouter();
  const cards = useCard();
  const [isMobile, isTablet] = useBreakpointScreen();
  const [openCardSelect, setOpenCardSelect] = useState(false);
  const cardDispatch = useCardDispatch();
  useEffect(() => {
    return () => {
      cardDispatch?.({ type: "clear" });
    };
  }, []);
  return (
    <div className='bg-white min-h-[80vh]'>
      <WapperContainer>
        <div className='px-4 py-6'>
          <div className='mb-4 lg:hidden'>
            <TitleComponent title='So sánh Thẻ' />
          </div>
          {/* <table className='w-full'>
            <thead>
              <tr className='flex gap-4 lg:gap-6 md:mb-4 mb-6'>
                <th className='sm:w-[33%] lg:w-[24%] w-1/2 rounded-xl p-4 bg-gray-5 lg:flex justify-center items-start flex-col hidden'>
                  <TitleComponent title='So sánh thẻ' />
                  <div className='text-left font-medium'>
                    {cards?.map((item) => (
                      <p className='text-black text-sm leading-[22px]' key={item.id}>
                        {item.title}
                      </p>
                    ))}
                  </div>
                </th>
                {cards?.map((card) => (
                  <th
                    className='md:w-[33%] w-1/2 lg:w-[24%] flex flex-col gap-3 min-h-64 justify-between p-2 lg:p-4 rounded-xl bg-gray-5'
                    key={card.id}
                  >
                    <div>
                      <div className='w-full h-[120px] gap-[18px] p-[1px] bg-transparent hover:bg-gradient-primary rounded-xl'>
                        <div className='relative h-full w-full rounded-[11px]'>
                          <CloseCircleFilled
                            className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                            onClick={() => cardDispatch?.({ type: "delete", payload: { id: card.id } })}
                          />
                          <Image
                            src={card.image ?? ""}
                            alt={card.title ?? ""}
                            fill
                            className='object-cover rounded-[11px]'
                          />
                        </div>
                      </div>
                      <p className='text-left text-base font-semibold leading-[22px] text-black mt-[18px]'>
                        {card.title}
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex-1 hidden md:block'>
                        <ButtonDefault
                          title='Xem chi tiết'
                          styles={{ fontWeight: 500, width: "100%" }}
                          onClick={() => router.push(`/individual/${card.id}`)}
                        />
                      </div>
                      <div className='flex-1'>
                        <ButtonComponent title='Mở thẻ ngay' active styles={{ fontWeight: 500, width: "100%" }} />
                      </div>
                    </div>
                  </th>
                ))}
                {isMobile && (cards || []).length < 2 && (
                  <th className='w-[48%] md:w-[30%] lg:w-[22%] xxl:w-[24%]'>
                    <SelectCard
                      onOpenChange={(open) => setOpenCardSelect(open)}
                      open={openCardSelect}
                      dataCard={dataCards}
                      cardSelect={cards || []}
                      onSelect={(card) => {
                        cardDispatch?.({ type: "change", payload: card });
                        setOpenCardSelect(false);
                      }}
                    />
                  </th>
                )}
                {isTablet && (cards || []).length < 3 && (
                  <th className='w-[48%] md:w-[30%] lg:w-[22%] xxl:w-[24%]'>
                    <SelectCard
                      onOpenChange={(open) => setOpenCardSelect(open)}
                      open={openCardSelect}
                      dataCard={dataCards}
                      cardSelect={cards || []}
                      onSelect={(card) => {
                        cardDispatch?.({ type: "change", payload: card });
                        setOpenCardSelect(false);
                      }}
                    />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <TitleCompareMobile title='Đặc điểm/Tiện ích sản phẩm' />
              <tr className='flex gap-4 lg:gap-6 mb-4'>
                <TitleCompare title='Đặc điểm/Tiện ích sản phẩm' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    <p className='text-base font-semibold text-black'>Đặc điểm</p>
                    {card.remuneration?.map((item) => (
                      <li key={item} className='text-gray-text text-sm'>
                        {item}
                      </li>
                    ))}
                    <p className='text-base font-semibold text-black mt-4'>Lợi ích</p>
                    {card.remuneration?.map((item) => (
                      <li key={item} className='text-gray-text text-sm'>
                        {item}
                      </li>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Điều kiện sử dụng' />
              <tr className='flex gap-4 lg:gap-6 mb-4'>
                <TitleCompare title='Điều kiện sử dụng' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Đối tượng áp dụng' />
              <tr className='flex gap-4 lg:gap-6 mb-4'>
                <TitleCompare title='Đối tượng áp dụng' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Hồ sơ đăng ký' />
              <tr className='flex gap-4 lg:gap-6 mb-4'>
                <TitleCompare title='Hồ sơ đăng ký' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
            </tbody>
            <tfoot className='md:hidden'>
              <tr className='flex gap-4'>
                <td className='hidden' />
                {cards?.map((card) => (
                  <td className='w-1/2' key={card.id}>
                    <ButtonComponent title='Mở thẻ ngay' active styles={{ width: "100%" }} />
                  </td>
                ))}
              </tr>
            </tfoot>
          </table> */}
          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-4 gap-6'>
              <div className='w-full rounded-xl p-4 bg-gray-5 lg:flex justify-center items-start flex-col hidden'>
                <TitleComponent title='So sánh thẻ' />
                <div className='text-left font-medium'>
                  {cards?.map((item) => (
                    <p className='text-black text-sm leading-[22px]' key={item.id}>
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
              {cards?.map((card) => (
                <div
                  className='w-full flex flex-col gap-3 min-h-64 justify-between p-2 lg:p-4 rounded-xl bg-gray-5'
                  key={card.id}
                >
                  <div>
                    <div className='w-full h-[120px] gap-[18px] p-[1px] bg-transparent hover:bg-gradient-primary rounded-xl'>
                      <div className='relative h-full w-full rounded-[11px]'>
                        <CloseCircleFilled
                          className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                          onClick={() => cardDispatch?.({ type: "delete", payload: { id: card.id } })}
                        />
                        <Image
                          src={card.image ?? ""}
                          alt={card.title ?? ""}
                          fill
                          className='object-cover rounded-[11px]'
                        />
                      </div>
                    </div>
                    <p className='text-left text-base font-semibold leading-[22px] text-black mt-[18px]'>
                      {card.title}
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='flex-1 hidden md:block'>
                      <ButtonDefault
                        title='Xem chi tiết'
                        styles={{ fontWeight: 500, width: "100%" }}
                        onClick={() => router.push(`/individual/${card.id}`)}
                      />
                    </div>
                    <div className='flex-1'>
                      <ButtonComponent title='Mở thẻ ngay' active styles={{ fontWeight: 500, width: "100%" }} />
                    </div>
                  </div>
                </div>
              ))}
              {isMobile && (cards || []).length < 2 && (
                <div className='w-full'>
                  <SelectCard
                    onOpenChange={(open) => setOpenCardSelect(open)}
                    open={openCardSelect}
                    dataCard={dataCards}
                    cardSelect={cards || []}
                    onSelect={(card) => {
                      cardDispatch?.({ type: "change", payload: card });
                      setOpenCardSelect(false);
                    }}
                  />
                </div>
              )}
              {isTablet && (cards || []).length < 3 && (
                <div className='w-full'>
                  <SelectCard
                    onOpenChange={(open) => setOpenCardSelect(open)}
                    open={openCardSelect}
                    dataCard={dataCards}
                    cardSelect={cards || []}
                    onSelect={(card) => {
                      cardDispatch?.({ type: "change", payload: card });
                      setOpenCardSelect(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className='grid grid-cols-4 gap-6'>
              <TitleCompareMobile title='Đặc điểm/Tiện ích sản phẩm' />
              <TitleCompare title='Đặc điểm/Tiện ích sản phẩm' />
              {cards?.map((card) => (
                <WapperContentCompare key={card.id}>
                  <p className='text-base font-semibold text-black'>Đặc điểm</p>
                  {card.remuneration?.map((item) => (
                    <li key={item} className='text-gray-text text-sm'>
                      {item}
                    </li>
                  ))}
                  <p className='text-base font-semibold text-black mt-4'>Lợi ích</p>
                  {card.remuneration?.map((item) => (
                    <li key={item} className='text-gray-text text-sm'>
                      {item}
                    </li>
                  ))}
                </WapperContentCompare>
              ))}
            </div>
            <div className='grid grid-cols-4 gap-6'></div>
            <div className='grid grid-cols-4 gap-6'></div>
            <div className='grid grid-cols-4 gap-6'></div>
          </div>
        </div>
      </WapperContainer>
    </div>
  );
};

const TitleCompare = ({ title }: { title: string }) => {
  return (
    <div className='p-4 bg-white w-full border-[1px] hidden lg:block border-solid rounded-xl border-gray-5'>
      <div className='flex gap-2'>
        <div className='min-w-6'>
          <div className='relative w-full h-6'>
            <Image src={icon} fill alt='icon-remu' className='object-contain' />
          </div>
        </div>
        <p className='font-semibold text-base text-black'>{title}</p>
      </div>
    </div>
  );
};

const TitleCompareMobile = ({ title }: { title: string }) => {
  return (
    <tr className='text-black-text font-semibold lg:hidden'>
      <th className='pb-2'>
        <p className='text-left'>{title}</p>
      </th>
    </tr>
  );
};

const WapperContentCompare = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full p-4 border-[1px] bg-white border-solid rounded-xl border-gray-5'>{children}</div>;
};
export default CompareCardPage;
