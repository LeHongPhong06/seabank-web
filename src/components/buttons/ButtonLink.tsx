"use client";
import React, { CSSProperties } from "react";
import icon from "@/assets/images/icons/arrow-right-buttonlink.svg";
import Image from "next/image";

type Props = {
  title: string;
  onClick?: () => void;
  styles?: CSSProperties;
};

const ButtonLink: React.FC<Props> = ({ title, onClick, styles }) => {
  return (
    <div
      onClick={() => onClick?.()}
      className='flex items-center gap-[6px] md:gap-2 hover:cursor-pointer'
      style={styles}
    >
      <p className='text-gray-process-text text-sm md:text-base'>{title}</p>
      <Image src={icon} alt='icon-right' width={24} height={24} />
    </div>
  );
};

export default ButtonLink;
