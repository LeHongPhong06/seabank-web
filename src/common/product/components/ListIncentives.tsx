import CardIncentives from "@/components/cards/CardIncentives";
import React from "react";

type Props = {
  incentivesData: Array<any>;
};

const ListIncentives: React.FC<Props> = ({ incentivesData }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
      {incentivesData.map((item) => (
        <CardIncentives data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListIncentives;
