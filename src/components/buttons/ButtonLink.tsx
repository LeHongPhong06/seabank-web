"use client";
import { CgArrowRight } from "react-icons/cg";
import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
};

const ButtonLink: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div onClick={() => onClick?.()} className='flex items-center gap-3'>
      <p className='bg-gradient-primary bg-clip-text text-transparent'>{title}</p>
      <CgArrowRight className='text-[16px] text-primary' size={16} />
    </div>
  );
};

export default ButtonLink;
