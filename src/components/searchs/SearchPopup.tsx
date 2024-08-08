import { CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import InputSearch from "../inputs/InputSearch";

const SearchPopup: React.FC = () => {
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
      <div className='flex justify-center absolute items-center size-9 rounded-full left-0 right-0 mx-auto my-0 -translate-y-12 bg-gray-second hover:cursor-pointer'>
        <CloseOutlined className='text-white text-xs' />
      </div>
      <div className='p-4 flex flex-col gap-4'>
        <h3 className='text-center font-bold text-[20px] text-transparent bg-gradient-primary bg-clip-text capitalize leading-7'>
          Tìm kiếm
        </h3>
        <InputSearch />
        <div>
          <h3 className='text-black font-bold mb-2'>Tìm kiếm gần đây:</h3>
          <div className='flex gap-2 flex-wrap'>
            {history.map((item) => (
              <ButtonComponent key={item.title} title={item.title} />
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-black font-bold mb-2'>Từ khóa phổ biến:</h3>
          <div className='flex gap-2 flex-wrap'>
            {history.map((item) => (
              <ButtonComponent key={item.title} title={item.title} />
            ))}
          </div>
        </div>
        <div className='flex gap-2'>
          {dataNews.map((item) => (
            <News data={item} />
          ))}
        </div>
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
      <div className='relative bg-gradient-black w-[110px] h-[120px] mb-2 rounded-xl'>
        <Image alt={data.title} fill src={data.image} className='rounded-xl object-cover' />
      </div>
      <div className='lg:absolute bottom-6 left-6 right-6 lg:bg-black-second lg:rounded-xl lg:px-[26px] lg:py-[7px]'>
        <p
          className={`pl-3 font-semibold text-[16px] before:absolute relative before:w-[6px] before:h-[16px] before:rounded-[10px] before:top-0 before:left-0 before:bottom-0 before:my-auto ${
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
