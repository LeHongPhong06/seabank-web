import cup from "@/assets/images/huanchuong.svg";
import phone from "@/assets/images/phone.svg";
import logo from "@/assets/images/seABank-logo.svg";
import search from "@/assets/images/search.svg";
import logoVietNam from "@/assets/images/vietnam.svg";
import { AlignLeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const links = [
    { title: "Cá nhân", href: "/" },
    { title: "Doanh nghiệp", href: "/" },
    { title: "Nhà đầu tư", href: "/" },
    { title: "Ngân hàng ưu tiên", href: "/" },
    { title: "Tuyển dụng", href: "/" },
  ];
  return (
    <header>
      <nav className='bg-primary'>
        <div className='max-w-[1320px] mx-auto'>
          <div className='flex justify-between items-center px-4 xl:px-0'>
            <div className='items-center gap-8 md:flex hidden'>
              {links.map((item) => (
                <Link
                  href={item.href}
                  className='before:hidden hover:text-gray-300 hover:before:block relative block py-3 font-semibold before:w-full before:h-2 before:bg-white before:absolute before:-top-1 before:right-0 before:left-0 before:rounded-full'
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <AlignLeftOutlined className='p-2 border-white border-[1px] rounded-xl md:hidden' />
            <div className='flex items-center gap-3 py-3 xl:p-0'>
              <div className='relative size-6 block lg:hidden'>
                <Image alt='search' src={search} fill objectFit='contain' />
              </div>
              <div className='relative size-6'>
                <Image alt='logo-vietnam' src={logoVietNam} fill objectFit='contain' />
              </div>
              <div className='lg:flex items-center gap-2 hidden'>
                <div className='relative size-6 flex gap-2'>
                  <Image src={phone} fill alt='phone' objectFit='contain' />
                </div>
                <p className='font-semibold'>1900 555 587</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className='bg-white'>
        <div className='max-w-[1320px] mx-auto'>
          <div className='py-2 md:py-3 md:px-4 xl:px-0 flex items-center justify-center md:justify-start gap-[10px] xl:gap-9'>
            <div className='relative w-[124px] h-[26px] md:w-[167px] md:h-[34px]'>
              <Image src={logo} fill alt='logo' objectFit='contain' />
            </div>
            <div className='relative w-[78px] h-[28px] md:w-[95px] md:h-[34px]'>
              <Image src={cup} fill alt='cup' objectFit='contain' />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
