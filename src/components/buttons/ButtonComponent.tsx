"use client";
import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
};

const ButtonComponent: React.FC<Props> = ({ title, onClick, icon, active }) => {
  const styleActive = "bg-gradient-primary text-white";
  return (
    <button
      onClick={() => onClick?.()}
      className={`text-black bg-gray rounded-lg flex justify-between items-center gap-[10px] capitalize font-semibold px-3 py-2 ${
        active ? styleActive : null
      }`}
    >
      {title}
      {icon}
    </button>
  );
};

export default ButtonComponent;
