"use client";
import bankIc from "@/assets/images/bank-ic.svg";
import chartIc from "@/assets/images/chart-ic.svg";
import flagIc from "@/assets/images/flag-ic.svg";
import safeIc from "@/assets/images/safe-ic.svg";
import seABankIc from "@/assets/images/seABank-ic.svg";
import walletIc from "@/assets/images/wallet-ic.svg";
import { useAppDispatch } from "@/hooks/redux";
import { setOpenChangeDrawerSearch, setOpenChangeModalSearch } from "@/stores/slices/search";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import AnimationWapper from "../AnimationWapper";
import ButtonComponent from "../buttons/ButtonComponent";
import InputComponent from "../inputs/InputComponent";

const SearchPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClosePopup = () => {
    dispatch(setOpenChangeModalSearch(false));
    dispatch(setOpenChangeDrawerSearch(false));
  };
  const history = [
    {
      title: "Quản lý dòng tiền",
      href: "/",
    },
    {
      title: "Ngân hàng số",
      href: "/",
    },
    {
      title: "Tin nội bộ",
      href: "/",
    },
    {
      title: "Ngân hàng SeABank",
      href: "/",
    },
  ];
  const dataNews = [
    {
      id: 1,
      title: "Tư vấn - Mẹo",
      type: "tips",
      image:
        "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      title: "Xử lý tài sản",
      type: "asset",
      image:
        "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      title: "Tin khác",
      type: "orther",
      image:
        "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
  ];
  return (
    <React.Fragment>
      <div
        className='flex justify-center absolute items-center size-9 rounded-full left-0 right-0 mx-auto my-0 -translate-y-16 lg:-translate-y-20 bg-gray-second hover:cursor-pointer'
        onClick={onClosePopup}
      >
        <CloseOutlined className='text-white text-xs' />
      </div>
      <div className='relative flex flex-col md:items-center gap-4 lg:gap-8'>
        <AnimationWapper styles='hidden lg:block absolute lg:left-0 top-10' direction='left'>
          <Image src={walletIc} alt='wallet-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <AnimationWapper styles='hidden lg:block absolute left-32 top-0' direction='top'>
          <Image src={chartIc} alt='chart-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <AnimationWapper styles='hidden lg:block absolute left-4 xl:left-20 top-32' direction='left' duration={1}>
          <Image src={bankIc} alt='bank-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <h3 className='lg:mt-6 font-bold text-center text-[20px] text-transparent bg-gradient-primary bg-clip-text capitalize leading-7'>
          Tìm kiếm
        </h3>
        <div className='flex gap-[18px] flex-col items-start md:items-center max-w-[788px] z-20'>
          <InputComponent
            preffix={<SearchOutlined className='text-red' />}
            affixWapperClass='md:rounded-2xl bg-gradient-primary md:bg-gray-text md:p-[2px]'
            containerClass='md:rounded-xl'
          />
          <div className='md:flex gap-2 items-center'>
            <h3 className='text-black font-bold mb-2'>Tìm kiếm gần đây:</h3>
            <div className='flex gap-2 flex-wrap'>
              {history.map((item) => (
                <ButtonComponent key={item.title} title={item.title} />
              ))}
            </div>
          </div>
        </div>
        <AnimationWapper styles='hidden lg:block absolute right-28 top-0' direction='top'>
          <Image src={seABankIc} alt='seABank-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <AnimationWapper styles='hidden lg:block absolute right-0 top-6' direction='right'>
          <Image src={safeIc} alt='safe-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <AnimationWapper styles='hidden lg:block absolute right-10 top-20' direction='right' duration={2}>
          <Image src={flagIc} alt='flag-ic' className='object-contain w-auto h-auto' />
        </AnimationWapper>
        <div className='md:flex items-center gap-2'>
          <h3 className='text-black font-bold mb-2'>Từ khóa phổ biến:</h3>
          <div className={`flex gap-2 overflow-x-auto scrollbar-none`}>
            {history.map((item) => (
              <ButtonComponent key={item.title} title={item.title} styles={{ textWrap: "nowrap" }} />
            ))}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-4 lg:mt-8'>
        {dataNews.map((item) => (
          <News data={item} key={item.id} />
        ))}
      </div>
    </React.Fragment>
  );
};
type NewsDataProps = {
  data: { id: number; title: string; image: string; type: string };
};

const News: React.FC<NewsDataProps> = ({ data }) => {
  const colors: Record<string, string> = {
    orther: "before:bg-green",
    asset: "before:bg-purple",
    tips: "before:bg-blue",
  };
  return (
    <section className='relative'>
      <div className='relative bg-gradient-black w-full min-h-[120px] md:h-[272px] mb-2 md:mb-0 rounded-xl'>
        <Image
          alt={data.title}
          fill
          src={data.image}
          className='rounded-xl object-cover'
          sizes='(max-width: 768px) 110px, (max-width: 1200px) 384px, 110px'
        />
      </div>
      <div className='md:absolute bottom-6 left-6 right-6 md:bg-black-second md:rounded-xl md:px-[26px] md:py-[12px] md:text-white'>
        <p
          className={`pl-3 md:pl-6 font-semibold text-[16px] before:absolute relative before:w-[6px] lg:before:h-[25px] before:h-[18px] before:rounded-[10px] before:top-0 before:left-0 before:bottom-0 before:my-auto ${
            colors[data.type]
          }`}
        >
          {data.title}
        </p>
      </div>
    </section>
  );
};
export default SearchPopup;
