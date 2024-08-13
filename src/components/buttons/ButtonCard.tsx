"use client";
import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  affix?: React.ReactNode;
  preffix?: React.ReactNode;
  active?: boolean;
  styles?: CSSProperties;
  buttonStyles?: CSSProperties;
  textStyles?: CSSProperties;
};

const ButtonCard: React.FC<Props> = ({ title, onClick, affix, active, styles, preffix, buttonStyles, textStyles }) => {
  return (
    <div className={`rounded-xl ${active ? "bg-gradient-primary" : "bg-gray"} font-semibold p-[1px]`} style={styles}>
      <button
        className={`flex justify-center px-3 py-2 items-center gap-[8px] w-full h-full font-bold text-base ${
          active ? "bg-white" : "bg-transparent"
        } py-[10px] rounded-xl`}
        onClick={onClick}
        style={buttonStyles}
      >
        {preffix}
        <p
          className={`${
            active ? "bg-gradient-primary text-transparent bg-clip-text" : "text-black"
          } text-nowrap font-medium text-base`}
          style={textStyles}
        >
          {title}
        </p>
        {affix}
      </button>
    </div>
  );
};

export default ButtonCard;
