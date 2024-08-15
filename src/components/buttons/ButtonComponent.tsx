"use client";
import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  preffix?: React.ReactNode;
  affix?: React.ReactNode;
  active?: boolean;
  styles?: CSSProperties;
  disabled?: boolean;
  textStyles?: CSSProperties;
};

const ButtonComponent: React.FC<Props> = ({ title, onClick, affix, active, styles, preffix, disabled }) => {
  const styleActive = "bg-gradient-primary text-white";
  return (
    <button
      style={styles}
      disabled={disabled}
      onClick={() => onClick?.()}
      className={`bg-gray rounded-xl flex text-base justify-center items-center gap-[10px] font-semibold px-4 min-h-[40px] py-2 ${
        disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
      } ${active ? styleActive : "text-black"}`}
    >
      {preffix}
      {title}
      {affix}
    </button>
  );
};

export default ButtonComponent;
