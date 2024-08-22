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
            colorPrimary: colors.RED,
            controlHeight: 46,
            colorPrimaryHover: colors.RED,
            controlPaddingHorizontal: 16,
            colorText: colors.TEXT,
            colorTextPlaceholder: colors.TEXT,
            borderRadiusSM: 12,
            borderRadiusLG: 12,
            fontSize: 16,
            paddingContentVerticalSM: 13.5,
            controlOutline: colors.PRIMARY_OUTLINE,
          },
        },
      }}
    >
      <Select {...selectProps} />
    </ConfigProvider>
  );
};

export default SelectComponent;
