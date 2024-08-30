"use client";
import ButtonComponent from "@/components/buttons/ButtonComponent";
import { useParams } from "next/navigation";
import React from "react";

type Props = {
  buttonListData: Array<{ key: string; label: string }>;
  onClickItem?: (item: { key: string; label: string }) => void;
};

const ButtonListCategory: React.FC<Props> = ({ buttonListData, onClickItem }) => {
  const params = useParams();
  //   const isCardTypeSelect = params === item.key;
  return (
    <React.Fragment>
      <div className='flex justify-between items-center gap-4'>
        <div className='hidden md:flex gap-4 flex-wrap'>
          {buttonListData.map((item) => {
            return (
              <ButtonComponent
                title={item.label}
                key={item.key}
                styles={{ fontWeight: 500 }}
                //   active={isCardTypeSelect}
                onClick={() => onClickItem?.(item)}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ButtonListCategory;
