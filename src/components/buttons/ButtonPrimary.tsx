import { colors } from "@/constants/colors";
import { Button, ConfigProvider, GetProps } from "antd";
import React from "react";

type Props = {
  buttonProps?: GetProps<typeof Button>;
};

const ButtonPrimary: React.FC<Props> = ({ buttonProps }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBorderColor: "rgba(221, 27, 28, 0.1)",
            defaultHoverColor: colors.WHITE,
            defaultActiveColor: colors.RED,
            colorBorder: "transparent",
            borderRadius: 8,
            fontSize: 16,
            colorBgContainer: colors.PRIMARY_GRADIENT,
            colorText: colors.WHITE,
            primaryShadow: "0 0 0 1px rgba(221, 27, 28, 0.1)",
            colorPrimaryActive: colors.PRIMARY_GRADIENT,
            colorPrimary: colors.PRIMARY_GRADIENT,
            colorPrimaryBg: colors.PRIMARY_GRADIENT,
          },
        },
      }}
    >
      <Button type='default' {...buttonProps} />
    </ConfigProvider>
  );
};

export default ButtonPrimary;
