"use client";
import icon from "@/assets/images/icons/mingcute.svg";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import SelectCard from "@/components/selects/SelectCard";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { useCard, useCardDispatch } from "@/context/card";
import { CloseCircleFilled, DownOutlined } from "@ant-design/icons";
import { useSize } from "ahooks";
import Image from "next/image";
import React, { useState } from "react";

const CompareCardPage: React.FC = () => {
  // const sizeCard = useSize();
  const [show, setShow] = useState(false);
  const [idSelect, setSelect] = useState(1);
  const cardCompareDispatch = useCardDispatch();
  const dataCards = [
    {
      id: 1,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2023-09/Th%E1%BA%BB%20S24%2B%2B.png",
    },
    {
      id: 2,
      title: "Thẻ tín dụng quốc tế SeABank Visa Platinum",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-05.jpg",
    },
    {
      id: 3,
      title: "Thẻ tín dụng quốc tế SeALady Cashback ( Visa/MasterCard) ",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-10.jpg",
    },
    {
      id: 4,
      title: "Thẻ tín dụng quốc tế SeA-Easy",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2021-09/THE_ANH%20WEB%202020_nen_637x245-04_0.jpg",
    },
    {
      id: 5,
      title: "Thẻ tín dụng BRG Elite",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-09/THE_ANH%20WEB%202020_nen_637x245-15.jpg",
    },
    {
      id: 6,
      title: "Thẻ tín dụng BRG Golf SeABank",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-10/THE_ANH%20WEB%202020_nen_637x245-16.jpg",
    },
    {
      id: 7,
      title: "Thẻ SeABank S24++",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2021-05/THE_ANH-WEB-2020_nen_637x245.jpg",
    },
    {
      id: 8,
      title: "Thẻ ghi nợ SeABank MasterCard Gold",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-02.jpg",
    },
    {
      id: 9,
      title: "Thẻ ghi nợ SeABank Visa Gold",
      remuneration: [
        "Hoàn tiền không giới hạn cho tất cả giao dịch thanh toán",
        "Miễn phí phát hành thẻ",
        "Hoàn tiền mọi giao dịch thanh toán trực tuyến lên đến 8%/năm, tối đa 7.200.000 đồng/năm",
      ],
      character: {
        utilities: [
          "Giao dịch an toàn với công nghệ chíp tiếp xúc",
          "Thời hạn sử dụng thẻ: 5 năm",
          "Hạn mức rút tiền/chuyển khoản tối đa: 30.000.000 VND/ngày",
          "Hạn mức rút tiền mặt ngoại tệ tại nước ngoài: 30.000.000 VND/Ngày",
        ],
        characteristic: [
          "Chủ thẻ có thể thực hiện giao dịch tại hơn 95% ATM tại Việt Nam. Rút tiền mặt và truy vấn số dư khi đi du lịch, công tác ở nước ngoài tại Thái Lan, Nga, Malaysia và Hàn Quốc.",
        ],
        condition: ["Khách hàng đáp ứng các điều kiện của SeABank"],
        object: ["Cá nhân là người Việt Nam hoặc công dân nước ngoài từ đủ 15 tuổi trở lên"],
        file: [
          "Đơn đề nghị phát hành thẻ (theo mẫu SeABank)",
          "Giấy tờ tùy thân còn hiệu lực: CMND/CCCD/Hộ chiếu",
          "Các giấy tờ khác theo quy định của SeABank trong từng thời kỳ",
        ],
      },
      image: "https://cdn.seabank.com.vn/sites/default/files/2020-06/THE_ANH%20WEB%202020_nen_637x245-02.jpg",
    },
  ];
  const cards = useCard();
  return (
    <div className='bg-white min-h-[80vh]'>
      <div className='p-4'>
        <WapperContainer>
          <div className='grid grid-cols-4 gap-3 mt-3 lg:grid-cols-[310px_1fr]'>
            <div className='gap-4 flex flex-col'>
              <div className='rounded-xl p-4 bg-gray-5 flex justify-center items-start flex-col'>
                <TitleComponent subTitle='Thẻ' title='So sánh' styles={{ flexDirection: "row-reverse" }} />
                {cards?.map((item) => (
                  <p className='text-black text-sm'>{item.title}</p>
                ))}
              </div>
              <WapperTitleCompare>
                <div className='flex gap-2 items-center'>
                  <div className='size-6 relative'>
                    <Image src={icon} alt='icon' fill />
                  </div>
                  <p className='font-semibold text-base text-black'>Đặc điểm/Tiện ích sản phẩm</p>
                </div>
              </WapperTitleCompare>
              <WapperTitleCompare>
                <div className='flex gap-2 items-center'>
                  <div className='size-6 relative'>
                    <Image src={icon} alt='icon' fill />
                  </div>
                  <p className='font-semibold text-base text-black'>Điều kiện sử dụng</p>
                </div>
              </WapperTitleCompare>
              <WapperTitleCompare>
                <div className='flex gap-2 items-center'>
                  <div className='size-6 relative'>
                    <Image src={icon} alt='icon' fill />
                  </div>
                  <p className='font-semibold text-base text-black'>Đối tượng áp dụng</p>
                </div>
              </WapperTitleCompare>
              <WapperTitleCompare>
                <div className='flex gap-2 items-center'>
                  <div className='size-6 relative'>
                    <Image src={icon} alt='icon' fill />
                  </div>
                  <p className='font-semibold text-base text-black'>Hồ sơ đăng ký</p>
                </div>
              </WapperTitleCompare>
            </div>
            <div className='flex gap-4'>
              {cards?.map((card) => (
                <div className='flex flex-col gap-4' key={card.id}>
                  <div className='p-2 rounded-xl bg-gray-5 gap-3 items-center flex flex-col flex-1'>
                    <div className='w-full h-24 p-[1px] bg-transparent hover:bg-gradient-primary rounded-xl'>
                      <div className='relative h-full w-full rounded-xl'>
                        <CloseCircleFilled
                          className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                          onClick={() => cardCompareDispatch?.({ type: "delete", payload: { id: card.id } })}
                        />
                        <Image src={card.image ?? ""} alt={card.title ?? ""} fill className='object-cover rounded-xl' />
                      </div>
                    </div>
                    <DownOutlined
                      className='text-gray-text hover:cursor-pointer'
                      onClick={() => {
                        setSelect(card.id);
                        setShow(true);
                      }}
                    />
                    <p className='text-base font-semibold line-clamp-2 leading-[22px] text-black'>{card.title}</p>
                    <div className='w-full'>
                      <ButtonComponent title='Mở thẻ ngay' active styles={{ fontWeight: 500, width: "100%" }} />
                    </div>
                  </div>
                  <WapperTitleCompare>
                    <p className='text-black font-semibold'>Đặc điểm</p>
                    <ul className='px-4 list-disc'>
                      {card.character?.utilities.map((item) => (
                        <li key={item} className='text-gray-text'>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className='text-black font-semibold'>Tiện ích</p>
                    <ul className='px-4 list-disc'>
                      {card.character?.condition.map((item) => (
                        <li key={item} className='text-gray-text'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </WapperTitleCompare>
                  <WapperTitleCompare>
                    <ul className='flex flex-col'>
                      {card.character?.condition.map((item) => (
                        <li key={item} className='text-gray-text'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </WapperTitleCompare>
                  <WapperTitleCompare>
                    <ul className='flex flex-col'>
                      {card.character?.object.map((item) => (
                        <li key={item} className='text-gray-text'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </WapperTitleCompare>
                  <WapperTitleCompare>
                    <ul className='flex flex-col'>
                      {card.character?.object.map((item) => (
                        <li key={item} className='text-gray-text'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </WapperTitleCompare>
                </div>
              ))}
            </div>
          </div>
        </WapperContainer>
      </div>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  isTitle?: boolean;
};
const WapperTitleCompare: React.FC<Props> = ({ children, isTitle }) => {
  return (
    <div className={`p-4 ${isTitle ? "bg-gray-5" : "bg-white"} border-[1px] border-solid rounded-xl border-gray-5`}>
      {children}
    </div>
  );
};

const IconCharacter = () => {};
export default CompareCardPage;
