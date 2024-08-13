import React, { CSSProperties } from "react";

type Props = {
  subTitle?: string;
  title?: string;
  styles?: CSSProperties;
};

const TitleComponent: React.FC<Props> = ({ subTitle, title, styles }) => {
  return (
    <div className='flex gap-1 text-[20px] font-bold leading-7' style={styles}>
      <span className='text-black capitalize'>{subTitle}</span>
      <p className='text-transparent bg-gradient-primary bg-clip-text capitalize'>{title}</p>
    </div>
  );
};

export default TitleComponent;
