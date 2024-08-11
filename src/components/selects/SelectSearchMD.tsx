import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Select } from "antd";
import React from "react";

const SelectSearchMD = (selectProps: GetProps<typeof Select>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            paddingSM: 16,
            colorBorder: "transparent",
            borderRadius: 12,
            colorPrimary: "transparent",
            colorPrimaryBorderHover: "transparent",
            controlHeight: 46,
            colorPrimaryHover: "transparent",
            controlPaddingHorizontal: 16,
            optionSelectedBg: colors.GRAY_BTN,
            selectorBg: "transparent",
            borderRadiusLG: 12,
            fontSize: 16,
            colorBorderBg: "transparent",
            colorBorderSecondary: "transparent",
            controlOutline: "transparent",
            colorPrimaryBorder: "transparent",
            paddingContentVerticalSM: 13.5,
            colorTextPlaceholder: "#000",
          },
        },
      }}
    >
      <Select {...selectProps} />
    </ConfigProvider>
  );
};

export default SelectSearchMD;
