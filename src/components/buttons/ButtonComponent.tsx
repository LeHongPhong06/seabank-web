"use client";
import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
  styles?: CSSProperties;
};

const ButtonComponent: React.FC<Props> = ({ title, onClick, icon, active, styles }) => {
  const styleActive = "bg-gradient-primary text-white";
  return (
    <button
      style={styles}
      onClick={() => onClick?.()}
      className={`text-black bg-gray rounded-xl flex justify-center items-center gap-[10px] capitalize font-semibold px-3 py-2 ${
        active ? styleActive : null
      } `}
    >
      {title}
      {icon}
    </button>
  );
};

export default ButtonComponent;
