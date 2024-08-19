import React from "react";

type Props = {
  idSelect: number;
  data: Array<{ key: number; label: string }>;
  onSelect: (key: number) => void;
};

const TabsComponent: React.FC<Props> = ({ data, idSelect, onSelect }) => {
  return (
    <div className='flex md:hidden overflow-x-scroll scrollbar-none gap-4 border-b-[1px] border-solid border-gray'>
      {data.map((item) => {
        const isCardTypeSelect = idSelect === item.key;
        return (
          <p
            key={item.key}
            onClick={() => onSelect(item.key)}
            className={`relative pb-3 text-base text-nowrap before:w-full hover:cursor-pointer z-50 ${
              isCardTypeSelect
                ? "text-black font-semibold before:h-[2px] before:absolute before:bg-gradient-primary before:bottom-0"
                : "text-gray font-medium"
            } `}
          >
            {item.label}
          </p>
        );
      })}
    </div>
  );
};

export default TabsComponent;
