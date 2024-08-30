"use client";
import icFb from "@/assets/images/fb.svg";
import icTiktok from "@/assets/images/tiktok.svg";
import icYoutube from "@/assets/images/youtube.svg";
import { EnvironmentOutlined, MailOutlined, MinusOutlined, PhoneOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse, Divider } from "antd";
import { CollapseProps } from "antd/lib";
import Image from "next/image";
import React from "react";
import BlockContainer from "../BlockContainer";

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
  const dataFooter: CollapseProps["items"] = data.map((item) => ({
    key: item.id,
    label: <p className='bg-clip-text text-transparent bg-gradient-primary text-[16px] font-bold'>{item.title}</p>,
    children: <SubMenu data={item.data} />,
  }));
  return (
    <footer className='bg-footer bg-no-repeat bg-cover bg-center bg-white py-6'>
      <BlockContainer>
        <div className='md:hidden'>
          <Collapse
            bordered={false}
            ghost
            size='small'
            expandIconPosition='end'
            expandIcon={({ isActive }) => (isActive ? <MinusOutlined color='#000' /> : <PlusOutlined />)}
            items={dataFooter}
            collapsible='header'
          />
        </div>
        <div className='md:flex gap-5 justify-between hidden px-4'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col gap-2 max-w-60'>
              <div className='flex gap-2 items-center justify-between'>
                <p className='bg-clip-text text-transparent bg-gradient-primary text-[16px] font-bold'>{item.title}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <SubMenu data={item.data} />
              </div>
            </div>
          ))}
        </div>
        <Divider />
        <section className='flex flex-col md:flex-row md:justify-between gap-4 px-4'>
          <div className='flex flex-col gap-[9px] order-1'>
            <p className='text-black font-semibold text-base'>Liên hệ với chúng tôi</p>
            <div className='flex items-center gap-[30px]'>
              <div className='relative size-[30px]'>
                <Image alt='fb-icon' fill src={icFb} />
              </div>
              <div className='relative size-[30px]'>
                <Image alt='tiktok-icon' fill src={icTiktok} />
              </div>
              <div className='relative size-[30px]'>
                <Image alt='youtube-icon' fill src={icYoutube} />
              </div>
            </div>
          </div>
          <div className='flex gap-3 items-center order-3 md:order-2'>
            <EnvironmentOutlined className='text-xl text-primary' />
            <p className='font-medium text-base text-black lg:max-w-[300px]'>
              Tòa BRG, 198 Trần Quang Khải, phường Lý Thái Tổ, quận Hoàn Kiếm, Hà Nội
            </p>
          </div>
          <div className='flex gap-3 items-center order-4 md:order-2'>
            <PhoneOutlined className='text-xl text-primary' />
            <div className='font-medium text-base text-black flex flex-col'>
              <p>KHCN 1900.555.587 - (024).3944.8702</p>
              <p>KHDN 1900.599.952 - 024.3204.5952</p>
            </div>
          </div>
          <div className='flex gap-3 items-center order-2 md:order-4'>
            <MailOutlined className='text-xl text-primary' />
            <p className='font-medium text-black'>contact@seabank.com.vn</p>
          </div>
        </section>
      </BlockContainer>
    </footer>
  );
};

const SubMenu = ({ data }: { data: Array<{ sub: string }> }) => {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((item) => (
        <p key={item.sub} className='text-[14px] text-black '>
          {item.sub}
        </p>
      ))}
    </div>
  );
};
export default Footer;
