import React, { HTMLProps } from "react";

type Props = {
  value?: string | number | readonly string[];
  onEnter?: () => void;
  inputClass?: HTMLProps<HTMLElement>["className"];
  affixWapperClass?: HTMLProps<HTMLElement>["className"];
  containerClass?: HTMLProps<HTMLElement>["className"];
  preffix?: React.ReactNode;
  affix?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputComponent: React.FC<Props> = ({
  preffix,
  inputProps,
  affix,
  inputClass,
  affixWapperClass,
  containerClass,
  onEnter,
  value,
}) => {
  return (
    <div
      className={`${affixWapperClass} p-[2px] w-full h-full rounded-xl focus-within:[box-shadow:0_0_0_4px_rgba(221,_27,_28,_0.1)]`}
    >
      <div
        className={`px-4 py-[13.12px] w-full h-full bg-white rounded-[10px] flex items-center gap-2 ${containerClass}`}
      >
        {preffix}
        <input
          {...inputProps}
          className={`flex-1 outline-none text-black ${inputClass}`}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onEnter?.();
            }
          }}
        />
        {affix}
        {value}
      </div>
    </div>
  );
};

export default InputComponent;
