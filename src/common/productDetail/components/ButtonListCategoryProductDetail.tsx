"use client";
import BlockContainer from "@/components/BlockContainer";
import ButtonListCategory from "@/components/buttons/ButtonListCategory";
import { useParams, useRouter } from "next/navigation";

const ButtonListCategoryProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { productId } = params;
  const btnList = [
    {
      key: "thong-tin-san-pham",
      label: "Thông tin sản phẩm",
    },
    {
      key: "loi-ich",
      label: "Lợi ích",
    },
    {
      key: "dieu-kien-dang-ky",
      label: "Điều kiện đăng ký",
    },
    {
      key: "thu-tuc-dang-ky",
      label: "Thủ tục đăng ký",
    },
    {
      key: "bieu-phi-bieu-mau",
      label: "Biểu phí & Biểu mẫu",
    },
  ];
  return (
    <ButtonListCategory
      buttonListData={btnList}
      onClickItem={(item: any) => router.push(`/ca-nhan/san-pham-dich-vu/the/${productId}/${item.key}`)}
    />
  );
};

export default ButtonListCategoryProductDetail;
