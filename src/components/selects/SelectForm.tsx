import arrowSelect from "@/assets/images/icons/arrow-down.svg";
import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Select } from "antd";
import Image from "next/image";

const SelectForm = (props: GetProps<typeof Select>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            paddingSM: 16,
            borderRadius: 12,
            fontSize: 16,
            controlHeight: 48,
            colorPrimary: colors.RED,
            colorBorder: colors.GRAY_BTN,
            colorTextPlaceholder: colors.GRAY_BTN,
            paddingContentHorizontal: 16,
            colorPrimaryHover: colors.RED,
            colorPrimaryBorder: colors.RED,
            controlOutline: colors.PRIMARY_OUTLINE,
          },
        },
      }}
    >
      <Select {...props} suffixIcon={<SuffixSelect />} />
    </ConfigProvider>
  );
};
const SuffixSelect = () => {
  return <Image src={arrowSelect} alt='icon-select' width={24} height={12} />;
};
export default SelectForm;
