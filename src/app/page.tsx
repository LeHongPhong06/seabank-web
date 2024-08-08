import ButtonComponent from "@/components/buttons/ButtonComponent";
import SearchModal from "@/components/modals/SearchModal";
import SelectComponent from "@/components/selects/SelectComponent";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import { SelectProps } from "antd/lib";

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
  return (
    <main className='min-h-[70vh] bg-white border-t-[1px] border-solid border-gray'>
      <section className=' max-w-[1320px] mx-auto'>
        <div className='py-6 px-4'>
          <Space direction='vertical' style={{ width: "100%" }} size={16}>
            <SelectComponent options={options} style={{ width: "100%" }} placeholder='Chọn hạng mục' />
            <Input size='large' prefix={<SearchOutlined />} />
            <div className='flex flex-col gap-1'>
              <div className='flex gap-[4px]'>
                <span className='bg-gradient-primary text-transparent font-semibold text-[20px] bg-clip-text'>
                  Kết Quả
                </span>
                <span className='text-[20px] text-black font-semibold'>Tìm Kiếm</span>
              </div>
              <p className='text-black font-normal'>
                Có <span className='font-semibold'>94</span> kết quả tìm kiếm cho
                <span className='font-semibold'> "Quản lí dòng tiền"</span>
              </p>
            </div>
            <ButtonComponent title='Tất cả' active />
          </Space>
        </div>
      </section>
      <SearchModal />
    </main>
  );
}
