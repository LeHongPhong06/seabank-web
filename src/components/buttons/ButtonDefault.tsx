import React, { CSSProperties } from "react";

type Props = {
  title: string;
  onClick?: () => void;
  preffix?: React.ReactNode;
  styles?: CSSProperties;
  active?: boolean;
  wapperClass?: React.HTMLProps<"div">["className"];
};

const ButtonDefault: React.FC<Props> = ({ title, onClick, styles, preffix, active, wapperClass }) => {
  return (
    <div className={`p-[1px] rounded-xl ${active ? "bg-gradient-primary" : "bg-gray"} ${wapperClass}`}>
      <button
        style={styles}
        onClick={() => onClick?.()}
        className={`bg-white text-black w-full h-full rounded-[11px] flex justify-center items-center gap-2 min-h-[40px] font-semibold px-4 py-2`}
      >
        {preffix}
        <p
          className={`${
            active ? "bg-gradient-primary text-transparent bg-clip-text" : "text-black"
          } font-medium text-base`}
        >
          {title}
        </p>
      </button>
    </div>
  );
};

export default ButtonDefault;
