import React from "react";
import notFound from "@/assets/images/not-found.svg";
import Image from "next/image";

const NotFoundData: React.FC = () => {
  return (
    <div className='flex justify-center items-center min-h-[375px]'>
      <div className='relative w-[160px] h-[160px]'>
        <Image src={notFound} alt='not-found' fill />
      </div>
    </div>
  );
};

export default NotFoundData;
