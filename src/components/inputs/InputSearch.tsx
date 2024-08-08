import { colors } from "@/constants/colors";
import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, GetProps, Input } from "antd";
import React from "react";

const InputSearch: React.FC = (inputProps: GetProps<typeof Input>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingBlockLG: 13.15,
            paddingInlineLG: 16,
            lineWidth: 2,
            activeBorderColor: colors.RED,
            hoverBorderColor: colors.RED,
            borderRadiusLG: 12,
            borderRadius: 12,
            activeShadow: "0 0 0 3px rgba(221, 27, 28, 0.1)",
            colorBorder: colors.RED,
          },
        },
      }}
    >
      <Input
        enterKeyHint='search'
        prefix={<SearchOutlined className='text-red text-xl mr-2' />}
        size='large'
        {...inputProps}
      />
    </ConfigProvider>
  );
};

export default InputSearch;
