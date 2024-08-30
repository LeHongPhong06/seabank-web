import { dataCards } from "@/data/card";
import { dataEndow, dataIncentives } from "@/data/endow";
import dynamic from "next/dynamic";

const ProductDetailComponentPage = dynamic(() => import("@/common/productDetail"));

const CardPageDetail = ({ params }: { params: { cardId: string } }) => {
  return (
    <ProductDetailComponentPage
      productDataDetail={dataEndow}
      productListData={dataCards}
      incentivesListData={dataIncentives}
    />
  );
};

export default CardPageDetail;
