import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Select } from "antd";
import React from "react";

const SelectComponent = (selectProps: GetProps<typeof Select>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            paddingSM: 16,
            colorBorder: "#ccc",
            borderRadius: 12,
            colorPrimary: colors.RED,
            paddingContentVerticalLG: 13.15,
            borderRadiusLG: 12,
          },
        },
      }}
    >
      <Select {...selectProps} />
    </ConfigProvider>
  );
};

export default SelectComponent;
