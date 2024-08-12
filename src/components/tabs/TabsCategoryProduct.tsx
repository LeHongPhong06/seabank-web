import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Tabs } from "antd";
import React from "react";
import styles from "./tabs.module.css";

const TabsCategoryProduct = (props: GetProps<typeof Tabs>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: colors.PRIMARY_GRADIENT,
            colorText: colors.GRAY_BTN,
            itemSelectedColor: colors.TEXT,
            itemColor: colors.GRAY_BTN,
            titleFontSize: 16,
            itemHoverColor: colors.TEXT,
            fontWeightStrong: 600,
            itemActiveColor: colors.TEXT,
          },
        },
      }}
    >
      <Tabs {...props} className={styles.title} />
    </ConfigProvider>
  );
};

export default TabsCategoryProduct;
