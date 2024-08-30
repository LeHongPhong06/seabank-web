"use client";
import ButtonListCategory from "@/components/buttons/ButtonListCategory";
import { useRouter } from "next/navigation";

const ButtonListCategoryProduct = () => {
  const router = useRouter();
  const buttonListData: Array<{ key: string; label: string }> = [
    {
      key: "the-ghi-no-noi-dia",
      label: "Thẻ ghi nợ nội địa",
    },
    {
      key: "the-ghi-no-quoc-te",
      label: "Thẻ ghi nợ quốc tế",
    },
    {
      key: "the-tin-dung-quoc-te",
      label: "Thẻ tín dụng quốc tế",
    },
    {
      key: "uu-dai-noi-bat",
      label: "Ưu đãi nổi bật",
    },
  ];
  return <ButtonListCategory buttonListData={buttonListData} onClickItem={(item) => router.push("")} />;
};

export default ButtonListCategoryProduct;
