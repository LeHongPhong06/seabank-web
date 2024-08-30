"use client";
import TabsCategory from "@/components/tabs/TabsCategory";
import { useRouter } from "next/navigation";

const TabsProductDetail = () => {
  const router = useRouter();
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
  return <TabsCategory items={btnList} onChange={(key) => router.push(``)} />;
};

export default TabsProductDetail;
