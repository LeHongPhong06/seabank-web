"use client";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import { ProductContext } from "@/context/product";
import { useGetBreakpointCurrent } from "@/hooks/breakpoint";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import ButtonComponent from "../../components/buttons/ButtonComponent";
import WapperContainer from "../../components/wappers/WapperContainer";

type Props = {};

const ToolbarCompareProduct: React.FC<Props> = ({}) => {
  const router = useRouter();
  const productContext = useContext(ProductContext);
  const { state, dispatch } = productContext;
  const { productListCompares } = state;
  const isMobile = _.includes(["xs", "sm"], useGetBreakpointCurrent());
  const isChooseMobile = isMobile && productListCompares.length > 1;
  const isChooseTablet = !isMobile && productListCompares.length > 2;
  const disableSelect = isChooseMobile || isChooseTablet;
  return (
    productListCompares.length > 0 && (
      <motion.div
        animate={{ y: [500, 0] }}
        transition={{ duration: 0.25, ease: "backInOut" }}
        className='fixed bottom-0 left-0 right-0 bg-white z-[100] min-h-fit [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-md'
      >
        <section className='grid gap-4 lg:gap-[36px] p-4 lg:grid-cols-[1fr_312px]'>
          <div className='grid gap-[20px] grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:auto-cols-max'>
            {productListCompares.map((item) => {
              return (
                <div className='relative w-full h-24 rounded-xl' key={item?.id}>
                  <CloseCircleFilled
                    className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                    onClick={() => dispatch?.({ type: "changeProductCompare", payload: { productCompare: item } })}
                  />
                  <Image
                    priority={false}
                    alt={`card-${item.id}`}
                    src={item.image}
                    fill
                    sizes='100%'
                    className='object-cover rounded-xl'
                  />
                </div>
              );
            })}
            {!disableSelect && (
              <div className='h-24 flex border-gray-text justify-center items-center border-[1px] rounded-xl border-dashed'>
                <PlusOutlined className='block text-gray-text text-[20px]' />
              </div>
            )}
          </div>
          <div className='flex items-center lg:w-[312px] justify-center'>
            <div className='flex gap-4 lg:flex-col-reverse w-full'>
              <div className='flex-1'>
                <ButtonDefault
                  title='Dừng so sánh'
                  onClick={() => dispatch?.({ type: "clearProductCompares", payload: {} })}
                />
              </div>
              <div className='flex-1'>
                <ButtonComponent
                  disabled={productListCompares.length < 2}
                  title='So sánh thẻ'
                  styles={{ maxHeight: 42, width: "100%" }}
                  onClick={() => router.push("/individual/compare")}
                  active={productListCompares.length > 1}
                  textStyles={{ fontSize: 16, fontWeight: 500 }}
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    )
  );
};

export default ToolbarCompareProduct;
