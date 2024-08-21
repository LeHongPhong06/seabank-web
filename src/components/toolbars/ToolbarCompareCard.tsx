import { colors } from "@/constants/colors";
import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { FooterToolbar } from "@ant-design/pro-components";
import { FooterToolbarProps } from "@ant-design/pro-layout/es/components/FooterToolbar";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonDefault from "../buttons/ButtonDefault";
import WapperContainer from "../wappers/WapperContainer";
import { Card } from "@/context/card/data";

type Props = {
  disableSelect?: boolean;
  cardSelects: Array<Card>;
  onCompare?: () => void;
  onCancel?: () => void;
  footerToolbarProps?: FooterToolbarProps;
  onDeleteItem: (id: number) => void;
};

const ToolbarCompareCard: React.FC<Props> = ({
  onCompare,
  onCancel,
  footerToolbarProps,
  onDeleteItem,
  cardSelects,
  disableSelect,
}) => {
  return (
    <FooterToolbar
      portalDom={false}
      renderContent={() => (
        <WapperContainer>
          <section className='grid gap-4 lg:gap-[36px] p-4 lg:grid-cols-[1fr_312px]'>
            <div className='grid gap-[20px] grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:auto-cols-max'>
              {cardSelects.map((item) => {
                return (
                  <div className='relative w-full h-24 rounded-xl' key={item.id}>
                    <CloseCircleFilled
                      className='absolute text-white z-20 top-[5px] lg:top-0 right-[5px] block hover:cursor-pointer lg:text-lg'
                      onClick={() => onDeleteItem(item.id)}
                    />
                    <Image
                      priority={false}
                      alt={`card-${item.id}`}
                      src={item.image || ""}
                      fill
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
                  <ButtonDefault title='Dừng so sánh' onClick={onCancel} />
                </div>
                <div className='flex-1'>
                  <ButtonComponent
                    disabled={cardSelects.length < 2}
                    title='So sánh thẻ'
                    styles={{ maxHeight: 42, width: "100%" }}
                    onClick={onCompare}
                    active={cardSelects.length > 1}
                    textStyles={{ fontSize: 16, fontWeight: 500 }}
                  />
                </div>
              </div>
            </div>
          </section>
        </WapperContainer>
      )}
      style={{ display: "block", backgroundColor: colors.WHITE, padding: 0 }}
      {...footerToolbarProps}
    />
  );
};

export default ToolbarCompareCard;
