import ButtonComponent from "@/components/buttons/ButtonComponent";
import InputSearch from "@/components/inputs/InputSearch";
import InputSearchMD from "@/components/inputs/InputSearchMD";
import NotFoundData from "@/components/NotFoundData";
import PaginationComponent from "@/components/paginations/PaginationComponent";
import SearchResult from "@/components/searchs/SearchResult";
import SelectComponent from "@/components/selects/SelectComponent";
import SelectSearchMD from "@/components/selects/SelectSearchMD";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { SelectProps } from "antd/lib";
import dynamic from "next/dynamic";
import React from "react";

const SearchModal = dynamic(() => import("@/components/modals/SearchModal"), { ssr: false });
export default function Home() {
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
    },
    {
      title: "Ưu đãi",
    },
    {
      title: "Tin tức",
    },
  ];
  return (
    <main className='min-h-[70vh] bg-white border-t-[1px] border-solid border-gray'>
      <section className=' max-w-[1320px] mx-auto'>
        <div className='py-6 px-4 lg:px-2 xl:px-0'>
          <div className='flex flex-col gap-4'>
            <div className='flex md:flex-row flex-col items-center gap-4 p-2 md:rounded-2xl md:gap-[10px] md:bg-gray-four'>
              <SelectComponent className='w-full md:hidden block' options={options} placeholder='Chọn hạng mục' />
              <SelectSearchMD className='w-[234px] md:block hidden' options={options} placeholder='Chọn hạng mục' />
              <div className='block md:hidden w-full'>
                <InputSearch
                  key={"search"}
                  inputProps={{
                    prefix: <SearchOutlined className='text-red' />,
                  }}
                />
              </div>
              <div className='md:block hidden flex-1'>
                <InputSearchMD
                  key={1}
                  inputProps={{
                    prefix: <SearchOutlined className='text-red' />,
                  }}
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-[4px]'>
                <span className='bg-gradient-primary text-transparent font-semibold text-[20px] bg-clip-text'>
                  Kết Quả
                </span>
                <span className='text-[20px] text-black font-semibold'>Tìm Kiếm</span>
              </div>
              {dataSearhResult.length > 0 ? (
                <p className='text-black font-normal'>
                  Có <span className='font-semibold'>94</span> kết quả tìm kiếm cho
                  <span className='font-semibold'>{"Quản lí dòng tiền"}</span>
                </p>
              ) : (
                <p className='text-sm text-black'>
                  <span>Xin lỗi, </span>
                  <span className='font-medium'>SeABank không tìm thấy kết quả</span>
                </p>
              )}
            </div>
          </div>
          <div className='flex gap-2 py-6'>
            <ButtonComponent title='Tất cả' active />
            {dataBtnList.map((item) => (
              <ButtonComponent title={item.title} key={item.title} />
            ))}
          </div>
          <section className='flex flex-col gap-3'>
            {dataSearhResult.length > 0 ? (
              dataSearhResult.map((item) => <SearchResult data={item} key={item.id} />)
            ) : (
              <NotFoundData />
            )}
          </section>
          {dataSearhResult.length > 0 && (
            <div className='pt-8 pb-3'>
              <div className='block md:hidden'>
                <ButtonComponent
                  title={"Xem thêm kết quả"}
                  active
                  icon={<ArrowDownOutlined className='text-white' />}
                  styles={{
                    paddingBlock: 12,
                    width: "100%",
                  }}
                />
              </div>
              <div className='justify-center md:flex hidden'>
                <PaginationComponent pageCurrent={1} pageSize={10} total={100} />
              </div>
            </div>
          )}
        </div>
      </section>
      <SearchModal />
    </main>
  );
}
