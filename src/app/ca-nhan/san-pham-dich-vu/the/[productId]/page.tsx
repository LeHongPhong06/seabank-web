import dynamic from "next/dynamic";

const ProductDetailComponentPage = dynamic(() => import("@/common/productDetail/page"));

const CardPageDetail = ({ params }: { params: { cardId: string } }) => {
  const data = {};
  return <ProductDetailComponentPage productDataDetail={data} />;
};

export default CardPageDetail;
