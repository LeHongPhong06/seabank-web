import ButtonLink from "@/components/buttons/ButtonLink";
import CardIncentives from "@/components/cards/CardIncentives";
import TitleComponent from "@/components/TitleComponent";
import React from "react";

type Props = {
  incentivesData: Array<any>;
};

const ListIncentives: React.FC<Props> = ({ incentivesData }) => {
  return (
    <div className='flex flex-col gap-4 md:gap-6 px-4 py-6 md:py-0 md:pt-12'>
      <div className='flex justify-between'>
        <TitleComponent title='Ưu Đãi Nỗi Bật' />
        <ButtonLink title='Xem tất cả' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {incentivesData.map((item) => (
          <CardIncentives data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListIncentives;
