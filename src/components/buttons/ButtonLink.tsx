"use client";
import { CgArrowRight } from "react-icons/cg";
import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  styles?: CSSProperties;
};

const ButtonLink: React.FC<Props> = ({ title, onClick, styles }) => {
  return (
    <div onClick={() => onClick?.()} className='flex items-center gap-3' style={styles}>
      <p className='bg-gradient-primary bg-clip-text text-transparent'>{title}</p>
      <CgArrowRight className='text-[16px] text-primary' size={16} />
    </div>
  );
};

export default ButtonLink;
