"use client";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import InputComponent from "@/components/inputs/InputComponent";
import NotFoundData from "@/components/NotFoundData";
import PaginationComponent from "@/components/paginations/PaginationComponent";
import SearchResult from "@/components/searchs/SearchResult";
import SelectComponent from "@/components/selects/SelectComponent";
import SelectSearchMD from "@/components/selects/SelectSearchMD";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { SelectProps } from "antd/lib";
import React, { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [type, setType] = useState("all");
  const options: SelectProps["options"] = [
    {
      label: "Tất cả",
    },
    {
      label: "Khách hàng cá nhân",
    },
    {
      label: "Khách hàng doanh nghiệp",
    },
  ];
  const dataSearhResult: any[] = [
    {
      id: 1,
      title: "[Hồ Chí Minh] Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu Hyundai Grand I10",
      decs: "Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho Trung tâm y tế Thị xã Kinh Môn",
    },
    {
      id: 2,
      title: "[Hồ Chí Minh] Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu Hyundai Grand I10",
      decs: "Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho Trung tâm y tế Thị xã Kinh Môn",
    },
    {
      id: 3,
      title: "[Hồ Chí Minh] Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu Hyundai Grand I10",
      decs: "Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho Trung tâm y tế Thị xã Kinh Môn",
    },
    {
      id: 4,
      title: "[Hồ Chí Minh] Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu Hyundai Grand I10",
      decs: "Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho Trung tâm y tế Thị xã Kinh Môn",
    },
    {
      id: 5,
      title: "[Hồ Chí Minh] Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu Hyundai Grand I10",
      decs: "Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho Trung tâm y tế Thị xã Kinh Môn",
    },
  ];
  const dataBtnList = [
    {
      title: "Sản phẩm",
      type: "product",
    },
    {
      title: "Ưu đãi",
      type: "incentives",
    },
    {
      title: "Tin tức",
      type: "news",
    },
  ];
  return (
    <main className='min-h-[70vh] bg-white'>
      <WapperContainer>
        <div className='py-6 px-4 flex flex-col gap-6 lg:gap-8'>
          <div className='flex md:flex-row flex-col items-center gap-4 md:p-2 md:rounded-2xl md:gap-[10px] md:bg-gray-four'>
            <SelectComponent className='w-full md:hidden block' options={options} placeholder='Chọn hạng mục' />
            <SelectSearchMD className='w-[234px] md:block hidden' options={options} placeholder='Chọn hạng mục' />
            <InputComponent
              affixWapperClass='md:hidden bg-gradient-primary rounded-xl'
              preffix={<SearchOutlined className='text-primary text-xl' />}
            />
            <InputComponent
              affixWapperClass='hidden md:block md:p-[1px] rounded-[16px] bg-gray-text'
              containerClass='rounded-[15px]'
              preffix={<SearchOutlined className='text-primary text-xl' />}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <TitleComponent
              title='Kết quả'
              subTitle='Tìm kiếm'
              styles={{ flexDirection: "row-reverse", justifyContent: "start" }}
            />
            {dataSearhResult.length > 0 ? (
              <p className='text-black font-normal'>
                Có <span className='font-semibold'>94</span> kết quả tìm kiếm cho
                <span className='font-semibold'>{`"Quản lí dòng tiền"`}</span>
              </p>
            ) : (
              <p className='text-sm text-black'>
                <span>Xin lỗi, </span>
                <span className='font-medium'>SeABank không tìm thấy kết quả</span>
              </p>
            )}
            <div className='flex gap-2 pt-1'>
              {dataSearhResult.length > 0 && (
                <React.Fragment>
                  <ButtonComponent title='Tất cả' active={type === "all"} onClick={() => setType("all")} />
                  {dataBtnList.map((item) => (
                    <ButtonComponent
                      title={item.title}
                      key={item.title}
                      active={type === item.type}
                      onClick={() => setType(item.type)}
                    />
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
          <section className='flex flex-col gap-3'>
            {dataSearhResult.length > 0 ? (
              dataSearhResult.map((item) => <SearchResult data={item} key={item.id} />)
            ) : (
              <NotFoundData />
            )}
          </section>
          {dataSearhResult.length > 0 && (
            <div>
              <div className='block md:hidden'>
                <ButtonComponent
                  title={"Xem thêm kết quả"}
                  active
                  affix={<ArrowDownOutlined className='text-white' />}
                  styles={{
                    paddingBlock: 12,
                    width: "100%",
                  }}
                />
              </div>
              <div className='justify-center md:flex hidden'>
                <PaginationComponent
                  pageCurrent={page}
                  pageSize={pageSize}
                  total={100}
                  onChange={(page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </WapperContainer>
    </main>
  );
}
