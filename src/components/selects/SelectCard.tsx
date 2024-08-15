import { colors } from "@/constants/colors";
import { Card } from "@/context/card/data";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import React from "react";
import styles from "./select.module.css";

type Props = {
  show: boolean;
  onShow?: () => void;
  cardSelect: number;
  onSelect: (card: Card) => void;
  dataCard?: Array<Card>;
  onSwap?: (card: Card) => void;
};

const SelectCard: React.FC<Props> = ({ dataCard, show, onShow, cardSelect, onSelect, onSwap }) => {
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
        },
      }}
    >
      <div
        onClick={onShow}
        className='relative p-[1px] h-24 flex-1 hover:cursor-pointer bg-transparent rounded-xl hover:bg-gradient-primary active:shadow-select-card'
      >
        <div className='p-2 rounded-xl bg-gray-5 h-full'>
          <div className='rounded-xl border-dashed border-[1px] h-full flex justify-center items-center border-gray bg-white'>
            <PlusOutlined className='text-gray-text' />
          </div>
        </div>
      </div>
      {show && (
        <div className='absolute right-4 z-50 translate-y-28 p-4 max-h-[385px] w-[342px] bg-white shadow-card border-[1px] border-solid border-gray rounded-xl'>
          <Input prefix={<SearchOutlined className='text-black text-xl mr-2' />} />
          <div className={`flex flex-col mt-3 gap-1 max-h-[274px] overflow-y-scroll ${styles.selectCard}`}>
            {dataCard?.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (cardSelect === 0) {
                      onSelect?.(item);
                    } else {
                      onSwap?.(item);
                    }
                    console.log("cardSelect", cardSelect);
                  }}
                  className={`px-4 h-12 py-[14px] ${
                    item.id === cardSelect ? "bg-gray" : "bg-white"
                  } hover:bg-gray rounded-xl hover:cursor-pointer`}
                >
                  <p
                    className={`line-clamp-1 ${
                      item.id === cardSelect ? "bg-gradient-primary bg-clip-text text-transparent" : "text-black"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </ConfigProvider>
  );
};

export default SelectCard;
