import React from "react";
import news from "@/assets/images/news.svg";
import Image from "next/image";
import ButtonLink from "../buttons/ButtonLink";

type Props = {
  data: { id: number; title: string; decs: string; image?: string };
};

const SearchResult: React.FC<Props> = ({ data }) => {
  return (
    <div className='lg:flex lg:gap-6 lg:items-center p-4 bg-gray-three rounded-xl'>
      <div className='relative hidden lg:block w-14 h-14'>
        <Image src={news} alt='tin-tuc' fill className='object-contain' />
      </div>
      <div>
        <h3 className='text-[16px] font-semibold leading-[22px] mb-2 text-black'>{data.title}</h3>
        <p className='text-gray-text mb-4 text-[14px]'>{data.decs}</p>
        <ButtonLink title='Đọc tiếp' />
      </div>
    </div>
  );
};

export default SearchResult;
