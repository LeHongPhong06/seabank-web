import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Input } from "antd";

type Props = {
  inputProps?: GetProps<typeof Input>;
};
const InputSearchMD: React.FC<Props> = ({ inputProps }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            lineWidth: 1,
            colorBorder: colors.GRAY,
            activeBorderColor: colors.GRAY,
            hoverBorderColor: colors.GRAY,
            borderRadiusLG: 16,
            controlHeight: 48,
            borderRadius: 16,
            activeShadow: "0 0 0 3px rgba(221, 27, 28, 0.1)",
          },
        },
      }}
    >
      <Input {...inputProps} />
    </ConfigProvider>
  );
};

export default InputSearchMD;
