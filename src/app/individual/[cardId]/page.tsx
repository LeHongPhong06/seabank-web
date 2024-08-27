"use client";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonLink from "@/components/buttons/ButtonLink";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import CardIncentives from "@/components/cards/CardIncentives";
import CardIndividual from "@/components/cards/CardIndividual";
import QuestionCollapse from "@/components/collapse/QuestionCollapse";
import ProductModal from "@/components/modals/ProductModal";
import TabsComponent from "@/components/tabs/TabsComponent";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { ProductContext } from "@/context/product";
import { dataCards } from "@/data/card";
import { dataEndow, dataIncentives } from "@/data/endow";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { CreditCardOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { CollapseProps } from "antd";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const CardPageDetail = ({ params }: { params: { cardId: string } }) => {
  const router = useRouter();
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const { cardId } = params;
  const [cardType, setCardType] = useState(1);
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const isChooseMobile = isMobile && state.productListCompares.length > 1;
  const isChooseTablet = !isMobile && state.productListCompares.length > 2;
  const btnList = [
    {
      key: 1,
      label: "Thông tin sản phẩm",
    },
    {
      key: 2,
      label: "Lợi ích",
    },
    {
      key: 3,
      label: "Điều kiện đăng ký",
    },
    {
      key: 4,
      label: "Thủ tục đăng ký",
    },
    {
      key: 5,
      label: "Biểu phí & Biểu mẫu",
    },
  ];
  const dataQuestions: CollapseProps["items"] = [
    {
      key: 1,
      label: "Ai có thể sử dụng dịch vụ Ngân hàng số SeABank?",
      children: (
        <div className='border-b-[1px] border-solid border-gray-process text-base font-normal pb-8'>
          <p>Dịch vụ SB Digibank được cung cấp cho khách hàng cá nhân có đủ đồng thời các điều kiện sau:</p>
          <ul className='list-disc'>
            <li className='ml-8 marker:text-[12px]'>
              Có tài khoản thanh toán tại SeABank (Đối tượng khách hàng được mở tài khoản thanh toán theo quy định của
              SeABank tại từng thời kỳ);
            </li>
            <li className='ml-8 marker:text-[12px]'>
              Có số điện thoại đăng ký mạng viễn thông của Việt Nam (Số điện thoại đăng ký của Quý khách phải đăng ký
              thuê bao chính chủ tại công ty viễn thông thực hiện theo quy định của SeABank tại từng thời kỳ);
            </li>
            <li className='ml-8 marker:text-[12px]'>
              Đăng ký sử dụng dịch vụ và chấp nhận các điều khoản, điều kiện cung cấp sử dụng dịch vụ Ngân hàng điện tử;
              các điều kiện giao dịch chung về bảo vệ dữ liệu cá nhân của Vietcombank…
            </li>
            <li className='ml-8 marker:text-[12px]'>
              Có thiết bị (máy tính, thiết bị di động…) kết nối internet. Trường hợp Quý khách sử dụng Dịch vụ SB
              Digibank trên ứng dụng di động, thiết bị di động cần đáp ứng:
              <ul className='list-disc'>
                <li className='ml-12 marker:text-[12px]'>
                  Sử dụng hệ điều hành iOS phiên bản từ 13.0 trở lên hoặc hệ điều hành Android phiên bản từ 6.0 trở lên
                  hoặc theo quy định của SeABank tại từng thời kỳ.
                </li>
                <li className='ml-12 marker:text-[12px]'>
                  Thiết bị di động không bị can thiệp (thiết bị sử dụng hệ điều hành Android không bị hook, root; thiết
                  bị sử dụng hệ điều hành iOS không bị jailbreak).
                </li>
                <li className='ml-12 marker:text-[12px]'>
                  Thiết bị di động sử dụng hệ điều hành Android không cài đặt các ứng dụng trợ năng (Accessibility)
                  thuộc danh sách nghi ngờ tiềm ẩn rủi ro theo quy định của SeABank trong từng thời kỳ.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      style: { fontWeight: 600 },
    },
    {
      key: 2,
      label: "Có phải dịch vụ Ngân hàng số SeABank hoạt động liên tục 24 giờ?",
      children: <></>,
      style: { fontWeight: 600 },
    },
    {
      key: 3,
      label: "Dịch vụ Ngân hàng số SeABank là gì?",
      children: <></>,
      style: { fontWeight: 600 },
    },
  ];
  return (
    <section className='bg-white'>
      <WapperContainer>
        <div className='md:py-12 md:px-4'>
          <div className='h-[454px] w-full md:p-0 p-4 bg-banner md:bg-banner-tablet bg-no-repeat bg-cover bg-center md:rounded-xl'>
            <div className='flex flex-col gap-4 justify-between md:justify-center md:px-14 lg:px-24 rounded-xl md:w-1/2 pt-6 md:pt-0 px-4 h-full bg-[linear-gradient(180deg,_#FFF_15.27%,_rgba(255,_255,_255,_0.00)_47.83%)] md:bg-[linear-gradient(180deg,_#E0E0E0_0%,_#CDD2D8_100%)] md:[clip-path:polygon(97%_0,_93%_37%,_100%_86%,_96%_100%,_45%_100%,_0_100%,_0_0)]'>
              <div className='flex flex-col gap-2'>
                <p className='text-[22px] md:text-[32px] text-black font-bold'>Thẻ</p>
                <p className='text-sm md:text-base leading-[22px] text-black'>
                  Khám phá sản phẩm thẻ yêu thích hoặc lựa chọn nhanh nhờ tính năng so sánh và gợi ý dựa trên nhu cầu
                  của bạn
                </p>
              </div>
              <div className='flex gap-4 max-h-[42px] z-20'>
                <ButtonPrimary
                  buttonProps={{
                    children: "Đăng ký",
                    style: { width: "50%", height: "100%", fontWeight: 500 },
                    icon: <CreditCardOutlined />,
                  }}
                />
                <ButtonCard
                  title='Ưu đãi'
                  preffix={<CreditCardOutlined className='text-red' />}
                  active
                  styles='flex-1 font-medium text-base min-h-[42px]'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 pt-6'>
          <TitleComponent title='Thông Tin Chi Tiết' />
          <div className='py-4 md:py-[20px]'>
            <div className='md:hidden'>
              <TabsComponent data={btnList} onSelect={(key) => setCardType(key)} idSelect={cardType} />
            </div>
            <div className='md:gap-2 hidden md:flex'>
              {btnList.map((item) => {
                const isActive = cardType === item.key;
                return <ButtonComponent key={item.key} title={item.label} active={isActive} />;
              })}
            </div>
          </div>
          <div className='relative md:bg-center before:bg-cover before:opacity-20 before:bg-no-repeat before:bg-right md:p-6 md:rounded-xl md:before:bg-hero before:rounded-xl before:absolute before:w-2/3 before:top-0 before:bottom-0 before:right-0 md:bg-[#F3F4F4]'>
            <div className='z-50'>
              <h3 className='mb-2 text-black font-semibold text-[18px]'>Chi tiết ưu đãi</h3>
              <div className='flex flex-col gap-4 z-10'>
                {dataEndow.map((item) => (
                  <p className='text-base leading-6 text-black' key={item.id}>
                    <span className='font-semibold'>{`Ưu đãi ${item.id}: `}</span>
                    {item.content}
                  </p>
                ))}
                <div className='max-w-[400px] md:flex md:gap-4 hidden z-50'>
                  <ButtonPrimary
                    buttonProps={{
                      children: "Đăng ký",
                      style: { flex: 1, fontWeight: 500 },
                      icon: <CreditCardOutlined />,
                    }}
                  />
                  <ButtonCard
                    title='Ưu đãi'
                    active
                    styles='flex-1'
                    preffix={<CreditCardOutlined className='text-red' />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-6'>
          <div className='flex items-center justify-between mb-4'>
            <TitleComponent title='Sản Phẩm Liên Quan' />
            <ButtonLink title='Xem tất cả' />
          </div>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {dataCards.map((item) => {
              const isSelectItem = state.productListCompares.find((card) => card.id === item.id);
              return (
                <CardIndividual
                  key={item.id}
                  disabled={isChooseMobile || isChooseTablet}
                  data={item}
                  onRegister={() =>
                    dispatch?.({
                      type: "changeModalSupport",
                      payload: { modalCustomerSupport: true },
                    })
                  }
                  isSelect={isSelectItem ? true : false}
                  onCompare={() => dispatch?.({ type: "changeProductCompare", payload: { productCompare: item } })}
                />
              );
            })}
          </section>
        </div>
      </WapperContainer>
      <div className='bg-white md:bg-gray-four'>
        <WapperContainer>
          <div className='py-4 md:py-12 px-4'>
            <div className='flex items-center justify-between mb-4'>
              <TitleComponent title='Ưu Đãi Liên Quan' />
              <ButtonLink title='Xem tất cả' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {dataIncentives.map((item) => (
                <CardIncentives data={item} key={item.id} />
              ))}
            </div>
          </div>
        </WapperContainer>
      </div>
      <div className='bg-white hidden md:block'>
        <WapperContainer>
          <div className='md:py-12 px-4'>
            <TitleComponent title='Các Câu Hỏi Liên Quan' />
            <QuestionCollapse
              items={dataQuestions}
              expandIcon={({ isActive }) => (isActive ? <UpOutlined /> : <DownOutlined />)}
            />
          </div>
        </WapperContainer>
      </div>
      {/* {state.productListCompares.length > 0 && (
        <ToolbarCompareCard
          disableSelect={isChooseMobile || isChooseTablet}
          onCompare={() => router.push("/individual/compare")}
          cardSelects={state.productListCompares}
          onCancel={() => dispatch?.({ type: "clearProductCompares", payload: {} })}
          onDeleteItem={(item) => dispatch?.({ type: "changeProductCompare", payload: { productCompare: item } })}
        />
      )} */}
      <ProductModal />
    </section>
  );
};

export default CardPageDetail;
