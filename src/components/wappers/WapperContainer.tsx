import React from "react";

const WapperContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-[1320xp] max-w-[1440px] mx-auto my-0'>{children}</div>;
};

export default WapperContainer;
