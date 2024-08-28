import { dataCards } from "@/data/card";
import { dataIncentives } from "@/data/endow";
import { Skeleton } from "antd";
import dynamic from "next/dynamic";
import React from "react";

const GroupProductCommonPage = dynamic(() => import("@/common/product/page"), {
  loading: () => <Skeleton active />,
});

const SubGroupProductPage = () => {
  // call api get product in here
  return <GroupProductCommonPage productData={dataCards} incentivesData={dataIncentives} />;
};
const IndividualPage: React.FC = () => {
  return <SubGroupProductPage />;
};

export default IndividualPage;
