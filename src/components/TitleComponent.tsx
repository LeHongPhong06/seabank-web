import React, { CSSProperties } from "react";

type Props = {
  title?: string;
  styles?: CSSProperties;
};

const TitleComponent: React.FC<Props> = ({ title, styles }) => {
  return (
    <h2
      className='text-transparent bg-gradient-primary leading-10 bg-clip-text capitalize text-2xl font-bold'
      style={styles}
    >
      {title}
    </h2>
  );
};

export default TitleComponent;
