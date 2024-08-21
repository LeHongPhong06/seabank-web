import React from "react";

const WapperContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-[calc(1440px+32px)] mx-auto my-0'>{children}</div>;
};

export default WapperContainer;
