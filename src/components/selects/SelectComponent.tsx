import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Select } from "antd";

const SelectComponent = (selectProps: GetProps<typeof Select>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            paddingSM: 16,
            colorBorder: "#828282",
            borderRadius: 12,
            colorIcon: "#212529",
            colorPrimary: colors.RED,
            controlHeight: 46,
            colorPrimaryHover: colors.RED,
            controlPaddingHorizontal: 16,
            borderRadiusLG: 12,
            fontSize: 16,
            paddingContentVerticalSM: 13.5,
          },
        },
      }}
    >
      <Select {...selectProps} />
    </ConfigProvider>
  );
};

export default SelectComponent;
