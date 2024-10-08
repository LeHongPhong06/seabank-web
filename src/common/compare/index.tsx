"use client";
import icon from "@/assets/images/icons/mingcute.svg";
import arrowDown from "@/assets/images/icons/arrow-down-product-compare.svg";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import SelectCard from "@/components/selects/SelectCard";
import TitleComponent from "@/components/TitleComponent";
import BlockContainer from "@/components/BlockContainer";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { CloseCircleFilled, DownOutlined } from "@ant-design/icons";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
type Props = { productList: Array<any> };

const CompareProductPage: React.FC<Props> = ({ productList }) => {
  const router = useRouter();
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const [openCardSelect, setOpenCardSelect] = useState(false);
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const { productListCompares } = state;
  useEffect(() => {
    return () => {
      dispatch?.({ type: "clearProductCompares", payload: {} });
    };
  }, []);
  return (
    <BlockContainer blockStyles='py-6 bg-white'>
      <BlockContainer blockStyles='mb-4' hiddenInTablet>
        <TitleComponent title='So sánh sản phầm' />
      </BlockContainer>
      <div className='flex flex-col gap-4'>
        <div>
          <LayoutCompareProduct>
            <div className='w-full rounded-xl p-4 bg-gray-5 lg:flex justify-center items-start flex-col hidden'>
              <TitleComponent title='So sánh sản phẩm' />
              <div className='text-left font-medium'>
                {productListCompares.map((item) => (
                  <p className='text-black text-sm leading-[22px]' key={item.id}>
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            {productListCompares.map((product) => (
              <div
                className='w-full flex flex-col gap-2 md:gap-3 min-h-64 justify-between p-2 lg:p-4 rounded-xl bg-gray-5'
                key={product.id}
              >
                <div>
                  <div className='flex items-center flex-col gap-[6px]'>
                    <div className='w-full h-[120px] gap-[18px] p-[1px] bg-transparent hover:bg-gradient-primary rounded-xl'>
                      <div className='relative h-full w-full rounded-[11px]'>
                        <CloseCircleFilled
                          className='absolute text-white z-20 top-[6px] right-[6px] block hover:cursor-pointer text-[21px]'
                          onClick={() =>
                            dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } })
                          }
                        />
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes='100%'
                          className='object-cover rounded-[11px]'
                        />
                      </div>
                    </div>
                    <Image src={arrowDown} alt='icon' width={24} height={12} />
                  </div>
                  <p className='text-left text-base font-semibold leading-[22px] text-black mt-2 md:mt-[18px]'>
                    {product.title}
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex-1 hidden md:block'>
                    <ButtonDefault
                      title='Xem chi tiết'
                      styles={{ fontWeight: 500, width: "100%" }}
                      onClick={() => router.push(`/ca-nhan/san-pham-dich-vu/the/${product.id}`)}
                    />
                  </div>
                  <div className='flex-1'>
                    <ButtonComponent title='Mở thẻ ngay' active styles={{ fontWeight: 500, width: "100%" }} />
                  </div>
                </div>
              </div>
            ))}
            {isMobile && productListCompares.length < 2 && (
              <div className='w-full'>
                <SelectCard
                  onOpenChange={(open) => setOpenCardSelect(open)}
                  open={openCardSelect}
                  dataCard={productList}
                  cardSelect={state?.productListCompares}
                  onSelect={(product) => {
                    dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } });
                    setOpenCardSelect(false);
                  }}
                />
              </div>
            )}
            {!isMobile && productListCompares.length < 3 && (
              <div className='w-full'>
                <SelectCard
                  onOpenChange={(open) => setOpenCardSelect(open)}
                  open={openCardSelect}
                  dataCard={productList}
                  cardSelect={productListCompares}
                  onSelect={(product) => {
                    dispatch?.({ type: "changeProductCompare", payload: { productCompare: product } });
                    setOpenCardSelect(false);
                  }}
                />
              </div>
            )}
          </LayoutCompareProduct>
        </div>
        <div>
          <TitleCompareMobile title='Đặc điểm/Tiện ích sản phẩm' />
          <LayoutCompareProduct>
            <TitleCompare title='Đặc điểm/Tiện ích sản phẩm' />
            {productListCompares.map((product) => (
              <WapperContentCompare key={product.id}>
                <p className='text-base font-semibold text-black'>Đặc điểm</p>
                {product.remuneration.map((item: any) => (
                  <li key={item} className='text-gray-text text-sm'>
                    {item}
                  </li>
                ))}
                <p className='text-base font-semibold text-black mt-4'>Lợi ích</p>
                {product.remuneration.map((item: any) => (
                  <li key={item} className='text-gray-text text-sm'>
                    {item}
                  </li>
                ))}
              </WapperContentCompare>
            ))}
          </LayoutCompareProduct>
        </div>
        <div>
          <TitleCompareMobile title='Điều kiện sử dụng' />
          <LayoutCompareProduct>
            <TitleCompare title='Điều kiện sử dụng' />
            {productListCompares.map((product) => (
              <WapperContentCompare key={product.id}>
                {product.remuneration.map((item: any) => (
                  <p key={item} className='text-gray-text text-sm'>
                    {item}
                  </p>
                ))}
              </WapperContentCompare>
            ))}
          </LayoutCompareProduct>
        </div>
        <div>
          <TitleCompareMobile title='Đối tượng áp dụng' />
          <LayoutCompareProduct>
            <TitleCompare title='Đối tượng áp dụng' />
            {productListCompares.map((product) => (
              <WapperContentCompare key={product.id}>
                {product.remuneration.map((item: any) => (
                  <p key={item} className='text-gray-text text-sm'>
                    {item}
                  </p>
                ))}
              </WapperContentCompare>
            ))}
          </LayoutCompareProduct>
        </div>
        <div>
          <TitleCompareMobile title='Hồ sơ đăng ký' />
          <LayoutCompareProduct>
            <TitleCompare title='Hồ sơ đăng ký' />
            {productListCompares.map((product) => (
              <WapperContentCompare key={product.id}>
                {product.remuneration.map((item: any) => (
                  <p key={item} className='text-gray-text text-sm'>
                    {item}
                  </p>
                ))}
              </WapperContentCompare>
            ))}
          </LayoutCompareProduct>
        </div>
        <BlockContainer isFullWidth hiddenInTablet>
          <LayoutCompareProduct>
            {productListCompares.map((product: any) => (
              <ButtonPrimary
                buttonProps={{
                  children: "Mở thẻ ngay",
                  style: { height: 42 },
                }}
                key={product.id}
              />
            ))}
          </LayoutCompareProduct>
        </BlockContainer>
      </div>
    </BlockContainer>
  );
};
const TitleCompare = ({ title }: { title: string }) => {
  return (
    <div className='p-4 bg-white w-full border-[1px] hidden lg:block border-solid rounded-xl border-gray-5'>
      <div className='flex gap-2'>
        <div className='min-w-6'>
          <div className='relative w-full h-6'>
            <Image src={icon} fill alt='icon-remu' className='object-contain' />
          </div>
        </div>
        <p className='font-semibold text-base text-black'>{title}</p>
      </div>
    </div>
  );
};

const TitleCompareMobile = ({ title }: { title: string }) => {
  return (
    <div className='text-black-text font-semibold lg:hidden'>
      <div className='pb-2'>
        <p className='text-left'>{title}</p>
      </div>
    </div>
  );
};

const WapperContentCompare = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full p-4 border-[1px] bg-white border-solid rounded-xl border-gray-5'>{children}</div>;
};

const LayoutCompareProduct = ({ children }: { children: React.ReactNode }) => {
  return <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>{children}</div>;
};
export default CompareProductPage;
