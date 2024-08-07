import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import footer from "@/assets/images/bg-footer.png";

type Props = {};

const Footer = (props: Props) => {
  const data = [
    {
      id: "1",
      title: "Cá nhân",
    },
    {
      id: "2",
      title: "Doanh nghiệp",
    },
    {
      id: "3",
      title: "Giới thiệu",
    },
    {
      id: "4",
      title: "Nhà đầu tư",
    },
    {
      id: "5",
      title: "Liên kết nhanh",
    },
  ];
  return (
    <footer
      style={{
        backgroundColor: "#fff",
      }}
    >
      <section
        style={{
          backgroundImage: `url("${footer}")`,
        }}
      >
        <section className='max-w-[1320px] mx-auto'>
          {data.map((item) => (
            <div key={item.id} className='flex'>
              <div className='text-4xl font-extrabold'>
                <span className='bg-clip-text text-transparent bg-gradient-primary'>{item.title}</span>
              </div>
              <PlusOutlined className='bg-[gradient-primary]' />
            </div>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
