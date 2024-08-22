import icon from "@/assets/images/icons/mingcute.svg";
import border from "@/assets/images/icons/card-border.svg";
import { Card, PayloadAction } from "@/context/card/data";
import { CheckOutlined, CreditCardOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import ButtonCard from "../buttons/ButtonCard";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonPrimary from "../buttons/ButtonPrimary";

type Props = {
  data: Card;
  isSelect: boolean;
  disabled?: boolean;
  onRegister?: (id: number) => void;
  onCompare: (payload: PayloadAction) => void;
};

const CardIndividual: React.FC<Props> = ({ data, disabled, isSelect, onRegister, onCompare }) => {
  return (
    <div className={`p-[2px] ${isSelect ? "bg-gradient-primary" : "bg-gray"}  rounded-xl w-full hover:shadow-card`}>
      <div className='p-4 h-full w-full gap-3 flex flex-col bg-white rounded-[10px]'>
        <div className='relative w-full min-h-[220px] h-full rounded-lg'>
          <Image alt={"border"} src={border} height={36.97} width={36.97} className='absolute top-0 right-0 z-10' />
          <Image
            alt={`image-card-${data.id}`}
            fill
            src={data.image ?? ""}
            className='object-cover rounded-xl rounded-tr-3xl'
          />
        </div>
        <h3 className='text-[18px] text-black font-semibold lg:min-h-[44px]'>{data.title}</h3>
        {data.remuneration?.map((remu: string) => (
          <div className='flex gap-2 items-start' key={remu}>
            <div className='min-w-4 pt-1'>
              <div className='relative w-full h-4'>
                <Image src={icon} fill alt='icon-remu' className='object-contain' />
              </div>
            </div>
            <p className='text-gray-process-text'>{remu}</p>
          </div>
        ))}
        <div className='flex gap-3 min-h-[42px]'>
          <div className='md:flex-1'>
            <ButtonCard
              disabled={disabled}
              active={isSelect}
              title='So sánh'
              onClick={() => onCompare?.({ type: "change", payload: { id: data.id } })}
              preffix={
                isSelect ? (
                  <div className='bg-gradient-primary size-6 flex justify-center items-center rounded-full'>
                    <CheckOutlined className='text-white text-[10px]' />
                  </div>
                ) : (
                  <div className='size-6 border-[1px] border-solid border-gray-text bg-transparent rounded-full' />
                )
              }
              styles='md:flex-1 bg-transparent md:bg-gray h-full'
            />
          </div>
          <div className='flex-1'>
            <ButtonPrimary
              buttonProps={{
                children: "Đăng ký tư vấn",
                style: { width: "100%", height: "100%" },
                onClick: () => onRegister?.(data.id),
                icon: <CreditCardOutlined className='text-base' />,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndividual;
