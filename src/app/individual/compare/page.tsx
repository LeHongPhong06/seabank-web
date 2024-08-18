"use client";
import icon from "@/assets/images/icons/mingcute.svg";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import SelectCard from "@/components/selects/SelectCard";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { colors } from "@/constants/colors";
import { useCard, useCardDispatch } from "@/context/card";
import { CloseCircleFilled, DownOutlined } from "@ant-design/icons";
import { useBreakpoint } from "@ant-design/pro-components";
import { Breakpoint } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const CompareCardPage: React.FC = () => {
  const cards = useCard();
  const cardCompareDispatch = useCardDispatch();
  const breakpoint = useBreakpoint();
  const breakpointTablet: Breakpoint[] = ["xs", "sm"];
  const isMobile = breakpointTablet.includes(breakpoint || "sm");
  const isTablet = !breakpointTablet.includes(breakpoint || "sm");
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
  return (
    <div className='bg-white min-h-[80vh]'>
      <div className='p-4'>
        <WapperContainer>
          <div className='mb-4 md:hidden'>
            <TitleComponent subTitle='Thẻ' title='So sánh' styles={{ flexDirection: "row-reverse" }} />
          </div>
          <table className='w-full'>
            <thead>
              <tr className='flex gap-4 md:mb-4 mb-6'>
                <th className='w-[23%] rounded-xl p-4 bg-gray-5 md:flex justify-center items-start flex-col hidden'>
                  <TitleComponent subTitle='Thẻ' title='So sánh' styles={{ flexDirection: "row-reverse" }} />
                  <div className='text-left font-medium'>
                    {cards?.map((item) => (
                      <p className='text-black text-sm' key={item.id}>
                        {item.title}
                      </p>
                    ))}
                  </div>
                </th>
                {cards?.map((card) => (
                  <th
                    className='md:w-[23%] w-1/2 flex flex-col justify-between gap-3 p-4 rounded-xl bg-gray-5'
                    key={card.id}
                  >
                    <div className='w-full h-[120px] p-[1px] bg-transparent hover:bg-gradient-primary rounded-xl'>
                      <div className='relative h-full w-full rounded-xl'>
                        <CloseCircleFilled
                          className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                          onClick={() => cardCompareDispatch?.({ type: "delete", payload: { id: card.id } })}
                        />
                        <Image src={card.image ?? ""} alt={card.title ?? ""} fill className='object-cover rounded-xl' />
                      </div>
                    </div>
                    <p className='text-base font-semibold leading-[22px] text-black mb-1'>{card.title}</p>
                    <div className='flex items-center gap-3'>
                      <div className='flex-1 hidden md:block'>
                        <ButtonDefault title='Xem chi tiết' styles={{ fontWeight: 500, width: "100%" }} />
                      </div>
                      <div className='flex-1'>
                        <ButtonComponent title='Mở thẻ ngay' active styles={{ fontWeight: 500, width: "100%" }} />
                      </div>
                    </div>
                  </th>
                ))}
                {isMobile && (cards || []).length < 2 && (
                  <th className='w-[48%] md:w-[23%]'>
                    <SelectCard
                      dataCard={dataCards}
                      cardSelect={cards || []}
                      onSelect={(card) => cardCompareDispatch?.({ type: "change", payload: card })}
                    />
                  </th>
                )}
                {isTablet && (cards || []).length < 3 && (
                  <th className='w-[48%] md:w-[23%]'>
                    <SelectCard
                      dataCard={dataCards}
                      cardSelect={cards || []}
                      onSelect={(card) => cardCompareDispatch?.({ type: "change", payload: card })}
                    />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <TitleCompareMobile title='Đặc điểm/Tiện ích sản phẩm' />
              <tr className='flex gap-4 mb-4'>
                <TitleCompare title='Đặc điểm/Tiện ích sản phẩm' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    <p className='text-base font-semibold text-black'>Đặc điểm</p>
                    {card.remuneration?.map((item) => (
                      <li key={item} className='text-gray-text text-sm'>
                        {item}
                      </li>
                    ))}
                    <p className='text-base font-semibold text-black mt-4'>Lợi ích</p>
                    {card.remuneration?.map((item) => (
                      <li key={item} className='text-gray-text text-sm'>
                        {item}
                      </li>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Điều kiện sử dụng' />
              <tr className='flex gap-4 mb-4'>
                <TitleCompare title='Điều kiện sử dụng' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Đối tượng áp dụng' />
              <tr className='flex gap-4 mb-4'>
                <TitleCompare title='Đối tượng áp dụng' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
              <TitleCompareMobile title='Hồ sơ đăng ký' />
              <tr className='flex gap-4 mb-4'>
                <TitleCompare title='Hồ sơ đăng ký' />
                {cards?.map((card) => (
                  <WapperContentCompare key={card.id}>
                    {card.remuneration?.map((item) => (
                      <p key={item} className='text-gray-text text-sm'>
                        {item}
                      </p>
                    ))}
                  </WapperContentCompare>
                ))}
              </tr>
            </tbody>
            <tfoot className='md:hidden'>
              <tr className='flex gap-4'>
                <td className='hidden md:w-[23%]' />
                {cards?.map((card) => (
                  <td className='md:w-[23%] w-1/2' key={card.id}>
                    <ButtonComponent
                      title='Mở thẻ ngay'
                      active
                      styles={{
                        width: "100%",
                      }}
                    />
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </WapperContainer>
      </div>
    </div>
  );
};

const TitleCompare = ({ title }: { title: string }) => {
  return (
    <td className='p-4 bg-white w-[23%] border-[1px] hidden md:block border-solid rounded-xl border-gray-5'>
      <div className='flex gap-2 items-center'>
        <div className='size-6 relative'>
          <Image src={icon} alt='icon' fill />
        </div>
        <p className='font-semibold text-base text-black'>{title}</p>
      </div>
    </td>
  );
};

const TitleCompareMobile = ({ title }: { title: string }) => {
  return (
    <tr className='text-black-text font-semibold md:hidden'>
      <th className='pb-2'>
        <p className='text-left'>{title}</p>
      </th>
    </tr>
  );
};

const WapperContentCompare = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className='md:w-[23%] w-1/2 p-4 border-[1px] bg-white border-solid rounded-xl border-gray-5'>{children}</td>
  );
};
export default CompareCardPage;
