import cup from "@/assets/images/huanchuong.svg";
import phone from "@/assets/images/phone.svg";
import logo from "@/assets/images/seABank-logo.svg";
import logoVietNam from "@/assets/images/vietnam.svg";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlockContainer from "../BlockContainer";

const Header: React.FC = () => {
  const links = [
    { title: "Cá nhân", href: "/individual" },
    { title: "Doanh nghiệp", href: "/" },
    { title: "Nhà đầu tư", href: "/" },
    { title: "Ngân hàng ưu tiên", href: "/" },
    { title: "Tuyển dụng", href: "/" },
  ];
  return (
    <header>
      <BlockContainer blockStyles='bg-primary max-h-[46px]'>
        <div className='flex justify-between items-center'>
          <div className='items-center gap-8 md:flex hidden'>
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className='before:hidden hover:text-gray-300 hover:before:block relative block py-2 font-semibold before:w-full before:h-2 before:bg-white before:absolute before:-top-[5px] before:right-0 before:left-0 before:rounded-full'
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Button
            className='p-2 border-white border-[1px] rounded-xl md:hidden bg-transparent text-white'
            icon={<AlignLeftOutlined className='text-white' />}
          >
            Trang chủ
          </Button>
          <div className='flex items-center gap-8 py-2 xl:p-0'>
            <div className='relative size-6'>
              <Image alt='logo-vietnam' src={logoVietNam} fill />
            </div>
            <div className='lg:flex items-center gap-2 hidden'>
              <div className='relative size-6 flex gap-2'>
                <Image src={phone} fill alt='phone' className='object-contain' />
              </div>
              <p className='font-semibold'>1900 555 587</p>
            </div>
          </div>
        </div>
      </BlockContainer>
      <BlockContainer blockStyles='bg-white border-b-[1px] border-solid border-gray'>
        <div className='py-2 md:py-3 flex items-center justify-center md:justify-start gap-[10px] xl:gap-9'>
          <div className='relative w-[124px] h-[26px] md:w-[167px] md:h-[34px]'>
            <Image src={logo} fill alt='logo' className='object-contain' />
          </div>
          <div className='relative w-[78px] h-[28px] md:w-[95px] md:h-[34px]'>
            <Image src={cup} fill alt='cup' className='object-contain' />
          </div>
        </div>
      </BlockContainer>
    </header>
  );
};

export default Header;
