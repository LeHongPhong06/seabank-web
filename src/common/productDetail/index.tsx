"use client";
import ListIncentives from "@/common/product/components/ListIncentives";
import ListProduct from "@/common/product/components/ListProduct";
import BlockContainer from "@/components/BlockContainer";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonLink from "@/components/buttons/ButtonLink";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import QuestionCollapse from "@/components/collapse/QuestionCollapse";
import ProductModal from "@/components/modals/ProductModal";
import TitleComponent from "@/components/TitleComponent";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { CreditCardOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import _ from "lodash";
import { useContext } from "react";
import ToolbarCompareProduct from "../product/components/ToolbarCompareProduct";
import { useRouter } from "next/navigation";

type Props = {
  productDataDetail: any;
  productListData: Array<any>;
  incentivesListData: Array<any>;
  questionListData?: Array<any>;
};

const ProductDetailComponentPage: React.FC<Props> = ({
  productDataDetail,
  productListData,
  incentivesListData,
  questionListData,
}) => {
  const router = useRouter();
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const isChooseMobile = isMobile && state.productListCompares.length > 1;
  const isChooseTablet = !isMobile && state.productListCompares.length > 2;

  return (
    <main className='bg-white'>
      <BlockContainer blockStyles='pb-6 md:pb-12'>
        <div className='relative md:bg-center before:bg-cover before:opacity-20 before:bg-no-repeat before:bg-right px-4 py-6 rounded-xl before:bg-hero before:rounded-xl before:absolute before:w-2/3 before:top-0 before:bottom-0 before:right-0 bg-[#F3F4F4]'>
          <div className='z-50'>
            <h3 className='mb-2 text-black font-semibold text-[18px]'>Chi tiết ưu đãi</h3>
            <div className='flex flex-col gap-4 z-10'>
              {productDataDetail.map((item: any) => (
                <p className='text-base leading-6 text-black' key={item.id}>
                  <span className='font-semibold'>{`Ưu đãi ${item.id}: `}</span>
                  {item.content}
                </p>
              ))}
              <div className='flex gap-4 w-full md:max-w-[400px] z-50'>
                <div className='flex-1'>
                  <ButtonPrimary
                    buttonProps={{
                      children: "Đăng ký",
                      style: { width: "100%", fontWeight: 500, height: "100%" },
                      icon: <CreditCardOutlined />,
                    }}
                  />
                </div>
                <div className='flex-1'>
                  <ButtonDefault
                    title='Ưu đãi'
                    active
                    wapperClass='w-full h-full'
                    preffix={<CreditCardOutlined className='text-red' />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlockContainer>
      <BlockContainer flex spaceBetween blockStyles='pb-4 md:pb-6'>
        <TitleComponent title='Sản Phẩm Liên Quan' />
        <ButtonLink title='Xem tất cả' />
      </BlockContainer>
      <BlockContainer blockStyles='pb-4 pb-6 md:pb-12 '>
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
          productList={productListData}
          productListCompare={state.productListCompares}
        />
      </BlockContainer>
      <BlockContainer flex spaceBetween blockStyles='bg-white md:bg-gray-four pb-4 md:pd-6 md:pt-12'>
        <TitleComponent title='Ưu đãi liên quan' />
        <ButtonLink title='Xem tất cả' />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white md:bg-gray-four'>
        <ListIncentives incentivesData={incentivesListData} />
      </BlockContainer>
      <BlockContainer blockStyles='bg-white md:py-12 px-4'>
        <BlockContainer flex spaceBetween isFullWidth>
          <TitleComponent title='Các Câu Hỏi Liên Quan' />
          <ButtonLink title='Xem tất cả' />
        </BlockContainer>
        <QuestionCollapse
          items={questionListData}
          expandIcon={({ isActive }) => (isActive ? <UpOutlined /> : <DownOutlined />)}
        />
      </BlockContainer>
      <ProductModal />
      <ToolbarCompareProduct
        productListCompare={state.productListCompares}
        onCompare={() => router.push("/ca-nhan/san-pham-dich-vu/the/so-sanh-san-pham")}
        onRemoveItem={(product) => dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })}
        onCancelCompare={() => dispatch?.({ type: "clearProductCompares", payload: {} })}
        disabledCompare={isChooseMobile || isChooseTablet}
      />
    </main>
  );
};

export default ProductDetailComponentPage;
