import BlockContainer from "@/components/BlockContainer";
import ButtonDefault from "@/components/buttons/ButtonDefault";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../../../components/buttons/ButtonComponent";

type Props = {
  onCompare: () => void;
  onCancelCompare: () => void;
  onRemoveItem: (product: any) => void;
  disabledCompare?: boolean;
  productListCompare: Array<any>;
};

const ToolbarCompareProduct: React.FC<Props> = ({
  onCancelCompare,
  onCompare,
  onRemoveItem,
  productListCompare,
  disabledCompare,
}) => {
  return (
    productListCompare.length > 0 && (
      <motion.div
        animate={{ y: [500, 0] }}
        transition={{ duration: 0.25, ease: "backInOut" }}
        className='fixed bottom-0 left-0 right-0 bg-white z-[100] min-h-fit [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-filter backdrop-blur-md'
      >
        <BlockContainer>
          <section className='grid gap-4 lg:gap-[36px] py-4 lg:grid-cols-[1fr_312px]'>
            <div className='grid gap-[20px] grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:auto-cols-max'>
              {productListCompare.map((item) => {
                return (
                  <div className='relative w-full h-24 rounded-xl' key={item?.id}>
                    <CloseCircleFilled
                      className='absolute text-white z-20 top-[6px] right-[6px] block hover:cursor-pointer text-[21px]'
                      onClick={() => onRemoveItem(item)}
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
              {!disabledCompare && (
                <div className='h-24 flex border-gray-text justify-center items-center border-[1px] rounded-xl border-dashed'>
                  <PlusOutlined className='block text-gray-text text-[20px]' />
                </div>
              )}
            </div>
            <div className='flex items-center lg:w-[312px] justify-center'>
              <div className='flex gap-4 lg:flex-col-reverse w-full'>
                <div className='flex-1'>
                  <ButtonDefault title='Dừng so sánh' onClick={onCancelCompare} />
                </div>
                <div className='flex-1'>
                  <ButtonComponent
                    disabled={productListCompare.length < 2}
                    title='So sánh sản phẩm'
                    styles={{ maxHeight: 42, width: "100%" }}
                    onClick={onCompare}
                    active={productListCompare.length > 1}
                    textStyles={{ fontSize: 16, fontWeight: 500 }}
                  />
                </div>
              </div>
            </div>
          </section>
        </BlockContainer>
      </motion.div>
    )
  );
};

export default ToolbarCompareProduct;
