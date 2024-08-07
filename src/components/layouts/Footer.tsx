import { PlusOutlined } from "@ant-design/icons";
import React from "react";

const Footer: React.FC = () => {
  const data = [
    {
      id: "1",
      title: "Cá nhân",
      data: [
        {
          sub: "Dịch vụ tài khoản",
        },
        {
          sub: "Thanh toán & chuyển tiền",
        },
        {
          sub: "Tiết kiệm",
        },
        {
          sub: "Thẻ",
        },
        {
          sub: "Tín dụng",
        },
        {
          sub: "Ngân hàng điện tử",
        },
        {
          sub: "Bảo hiểm",
        },
        {
          sub: "Điều kiện & điều khoản sử dụng SeAMobie/SeANet",
        },
      ],
    },
    {
      id: "2",
      title: "Doanh nghiệp",
      data: [
        {
          sub: "Tín dụng",
        },
        {
          sub: "Tài trợ XNK & Bảo lãnh",
        },
        {
          sub: "Tài khoản & Tiền gửi",
        },
        {
          sub: "Quản lý dòng tiền",
        },
        {
          sub: "Chuyển tiền & dịch vụ khác",
        },
      ],
    },
    {
      id: "3",
      title: "Giới thiệu",
      data: [
        {
          sub: "Giới thiệu SeABank",
        },
        {
          sub: "Tin SeABank",
        },
        {
          sub: "Phát triển bển vững",
        },
        {
          sub: "Hoạt đồng trách nhiệm xã hội",
        },
        {
          sub: "Quỹ Ươm mầm Ước mơ",
        },
        {
          sub: "Văn hóa SeABank",
        },
        {
          sub: "Tư vấn dịch vụ",
        },
        {
          sub: "Tuân thủ",
        },
      ],
    },
    {
      id: "4",
      title: "Nhà đầu tư",
      data: [
        {
          sub: "Công bố thông tin",
        },
        {
          sub: "Báo cáo thường niên",
        },
        {
          sub: "Báo cáo tài chính",
        },
        {
          sub: "Thông tin cổ đông",
        },
        {
          sub: "Báo cáo quản trị",
        },
        {
          sub: "Báo cáo xếp hạng tín nhiệm",
        },
        {
          sub: "Tỷ lệ hoàn vốn",
        },
      ],
    },
    {
      id: "5",
      title: "Liên kết nhanh",
      data: [
        {
          sub: "SeANet - Ngân hàng điện tử",
        },
        {
          sub: "Tin tuyển dụng",
        },
        {
          sub: "Điểm giao dịch & ATM",
        },
        {
          sub: "Mời chào giá cạnh tranh",
        },
        {
          sub: "Tra cứu hóa đơn điện tử",
        },
      ],
    },
  ];
  return (
    <footer className='bg-footer bg-no-repeat bg-cover bg-center bg-white py-6 px-4'>
      <section className='max-w-[1320px] mx-auto'>
        <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center justify-between'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#dd1a1c] to-[#9e1e1f] text-[16px] font-bold'>
                  {item.title}
                </p>
                <PlusOutlined className='text-primary block md:hidden' />
              </div>
              <div className='flex flex-col gap-2'>
                {item.data.map((item) => (
                  <p key={item.sub} className='text-[14px] text-black max-w-52'>
                    {item.sub}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
