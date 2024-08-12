import React from "react";

type Props = {
  children: React.ReactNode;
};

const WapperContent: React.FC<Props> = ({ children }) => {
  return <section className=' max-w-[1320px] mx-auto'>{children}</section>;
};

export default WapperContent;
