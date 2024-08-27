import { ClockCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import Image from "next/image";
import React from "react";

type DataProps = {
  id: number;
  title: string;
  image: string;
  startDate: number;
  endDate: number;
};
type Props = {
  data: DataProps;
};

const CardIncentives: React.FC<Props> = ({ data }) => {
  const { startDate, endDate } = data;
  const currentDate = new Date().getTime();
  const fomartProcess = (): number => {
    if (currentDate < startDate) {
      return 0;
    } else if (currentDate > endDate) {
      return 100;
    } else {
      const totalDuration = endDate - startDate;
      const elapsedDuration = currentDate - startDate;
      return Math.round((elapsedDuration / totalDuration) * 100);
    }
  };
  const process = fomartProcess();
  const dateFormat = (date: number) => moment(date).format("DD/MM/YYYY");
  return (
    <div className='p-0 md:p-4 rounded-xl flex flex-col gap-[18px] bg-white'>
      <div className='relative h-[220px] w-full rounded-[10px]'>
        <Image
          alt={`incentives-${data.id}`}
          fill
          src={data.image}
          className='object-cover rounded-[10px]'
          sizes='100%'
          priority
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h4 className='text-lg font-semibold text-black'>{data.title}</h4>
        <div className='flex items-center gap-2 text-gray-process-text'>
          <ClockCircleOutlined />
          <p>{`${dateFormat(data.startDate)} - ${dateFormat(data.endDate)}`}</p>
        </div>
        <div className='w-full h-[5px] bg-gray-process rounded-full relative'>
          <div
            style={{ width: `${process}%` }}
            className={`bg-red absolute ${process === 100 ? "rounded-full" : "rounded-l-full"} top-0 bottom-0`}
          />
        </div>
      </div>
    </div>
  );
};

export default CardIncentives;
