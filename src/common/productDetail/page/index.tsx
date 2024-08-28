"use client";
import ListProduct from "@/common/product/components/ListProduct";
import ButtonCard from "@/components/buttons/ButtonCard";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonLink from "@/components/buttons/ButtonLink";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import CardIncentives from "@/components/cards/CardIncentives";
import QuestionCollapse from "@/components/collapse/QuestionCollapse";
import ProductModal from "@/components/modals/ProductModal";
import TabsComponent from "@/components/tabs/TabsComponent";
import TitleComponent from "@/components/TitleComponent";
import WapperContainer from "@/components/wappers/WapperContainer";
import { ProductContext } from "@/context/product";
import { dataEndow, dataIncentives } from "@/data/endow";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { CreditCardOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

type Props = {
  productDataDetail: any;
};

const ProductDetailComponentPage: React.FC<Props> = ({ productDataDetail }) => {
  const router = useRouter();
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
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
  return (
    <section className='bg-white'>
      <WapperContainer>
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
          <ListProduct
            disabledCompare={isChooseMobile || isChooseTablet}
            onSelectCompare={(product) =>
              dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })
            }
            onRegister={() =>
              dispatch?.({
                type: "changeModalSupport",
                payload: { modalCustomerSupport: true },
              })
            }
            productList={[]}
            productListCompare={state.productListCompares}
          />
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
              items={[]}
              expandIcon={({ isActive }) => (isActive ? <UpOutlined /> : <DownOutlined />)}
            />
          </div>
        </WapperContainer>
      </div>
      <ProductModal />
    </section>
  );
};

export default ProductDetailComponentPage;
