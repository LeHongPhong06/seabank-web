import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  styles?: CSSProperties;
  textStyles?: CSSProperties;
};

const ButtonDefault: React.FC<Props> = ({ title, onClick, styles, textStyles }) => {
  return (
    <button
      style={styles}
      onClick={() => onClick?.()}
      className={`bg-white border-solid border-[1px] border-gray rounded-xl flex justify-center items-center gap-[10px] font-semibold px-3 py-2`}
    >
      <p className='text-black' style={textStyles}>
        {title}
      </p>
    </button>
  );
};

export default ButtonDefault;
