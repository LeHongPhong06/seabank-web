import React, { CSSProperties } from "react";

type Props = {
  subTitle?: string;
  title?: string;
  styles?: CSSProperties;
};

const TitleComponent: React.FC<Props> = ({ subTitle, title, styles }) => {
  return (
    <div className='inline-flex gap-[5px] text-[20px] md:text-2xl font-bold leading-7' style={styles}>
      <span className='text-black capitalize'>{subTitle}</span>
      <p className='text-transparent bg-gradient-primary bg-clip-text capitalize'>{title}</p>
    </div>
  );
};

export default TitleComponent;
