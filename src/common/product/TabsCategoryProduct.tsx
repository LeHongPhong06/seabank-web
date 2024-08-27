"use client";
import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Tabs } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const TabsCategoryProduct = (props: GetProps<typeof Tabs>) => {
  const router = useRouter();
  const dataCategory = [
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
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: colors.RED,
            colorText: colors.GRAY_BTN,
            itemSelectedColor: colors.RED,
            itemColor: colors.GRAY_BTN,
            titleFontSize: 16,
            itemHoverColor: colors.TEXT,
            fontWeightStrong: 600,
            itemActiveColor: colors.TEXT,
          },
        },
      }}
    >
      <Tabs {...props} items={dataCategory} onChange={(e) => router.push(e)} />
    </ConfigProvider>
  );
};

export default TabsCategoryProduct;
