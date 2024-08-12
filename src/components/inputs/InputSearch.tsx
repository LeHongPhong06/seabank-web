import { colors } from "@/constants/colors";
import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, GetProps, Input } from "antd";
import React from "react";
type Props = {
  inputProps?: GetProps<typeof Input>;
};
const InputSearch: React.FC<Props> = ({ inputProps }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            lineWidth: 2,
            activeBorderColor: colors.RED,
            hoverBorderColor: colors.RED,
            borderRadiusLG: 12,
            controlHeight: 48,
            borderRadius: 12,
            activeShadow: "0 0 0 2px rgba(221, 27, 28, 0.1)",
            colorBorder: colors.RED,
          },
        },
      }}
    >
      <Input
        prefix={<SearchOutlined className='text-red text-xl m-2' />}
        {...inputProps}
        styles={{
          affixWrapper: {
            borderImageSource: colors.PRIMARY_GRADIENT,
            borderImageSlice: 1,
            borderImageWidth: 1,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderRadius: 12,
          },
        }}
      />
    </ConfigProvider>
  );
};

export default InputSearch;
