"use client";
import { colors } from "@/constants/colors";
import { Card } from "@/context/card/data";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, GetProps, Input, Popover } from "antd";
import React from "react";
import styles from "./select.module.css";

type Props = {
  inputProps?: GetProps<typeof Input>;
  cardSelect: Array<Card>;
  onSelect: (card: Card) => void;
  dataCard?: Array<Card>;
  popoverProps?: GetProps<typeof Popover>;
  open?: boolean;
  onOpenChange: (trigger: boolean) => void;
};

const SelectCard: React.FC<Props> = ({
  onOpenChange,
  dataCard,
  cardSelect,
  onSelect,
  inputProps,
  popoverProps,
  open,
}) => {
  const ContainerPopover = () => {
    return (
      <div className='max-h-[385px] w-[342px] bg-white'>
        <Input prefix={<SearchOutlined className='text-black text-xl mr-2' />} {...inputProps} />
        <div className={`flex flex-col mt-3 gap-1 max-h-[274px] overflow-y-scroll ${styles.selectCard}`}>
          {dataCard?.map((item) => {
            const cardItem = cardSelect?.find((card) => card.id === item.id);
            return (
              <div
                onClick={() => {
                  if (!cardItem) {
                    onSelect(item);
                  }
                }}
                key={item.id}
                className={`px-4 h-12 py-[14px] ${
                  cardItem ? "bg-gray hover:cursor-not-allowed" : "hover:cursor-pointer bg-white"
                } hover:bg-gray rounded-xl`}
              >
                <p
                  className={`line-clamp-1 ${
                    cardItem ? "bg-gradient-primary bg-clip-text text-transparent" : "text-black"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            controlHeight: 48,
            borderRadiusLG: 12,
            borderRadius: 12,
            activeBorderColor: colors.RED,
            hoverBorderColor: colors.RED,
            colorPrimary: colors.GRAY,
            paddingInline: 16,
            activeShadow: "0 0 0 2px rgba(221, 27, 28, 0.1)",
          },
          Popover: {
            sizePopupArrow: 0,
            borderRadiusLG: 12,
            boxShadowSecondary: "30px 50px 80px 0px rgba(0, 0, 0, 0.15)",
          },
        },
      }}
    >
      <Popover
        open={open}
        placement='bottomRight'
        content={<ContainerPopover />}
        onOpenChange={onOpenChange}
        trigger={"click"}
        id='popover-chosse-card'
        {...popoverProps}
      >
        <div
          className='relative p-[1px] h-[152px] hover:cursor-pointer bg-transparent rounded-xl hover:bg-gradient-primary active:shadow-select-card'
          onClick={() => onOpenChange(true)}
        >
          <div className='p-2 md:p-4 rounded-[11px] bg-gray-5 h-full'>
            <div className='rounded-xl border-dashed border-[2px] h-full flex justify-center items-center border-gray bg-white'>
              <PlusOutlined className='text-gray-text' />
            </div>
          </div>
        </div>
      </Popover>
    </ConfigProvider>
  );
};

export default SelectCard;
