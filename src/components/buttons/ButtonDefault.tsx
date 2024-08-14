import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  preffix?: React.ReactNode;
  styles?: CSSProperties;
};

const ButtonDefault: React.FC<Props> = ({ title, onClick, styles, preffix }) => {
  return (
    <button
      style={styles}
      onClick={() => onClick?.()}
      className={`bg-white border-solid border-[1px] text-black border-gray rounded-xl flex justify-center items-center gap-2 min-h-[40px] font-semibold px-4 py-2`}
    >
      {preffix}
      {title}
    </button>
  );
};

export default ButtonDefault;
