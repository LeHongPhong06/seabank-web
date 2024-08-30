import { dataCards } from "@/data/card";
import dynamic from "next/dynamic";
import React from "react";

const TableProductCompareComponent = dynamic(() => import("@/common/compare"));

const CompareCardPage: React.FC = () => {
  // call api get product list in here
  return <TableProductCompareComponent productList={dataCards} />;
};

export default CompareCardPage;
