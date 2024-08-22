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
            defaultHoverColor: colors.WHITE,
            defaultActiveColor: colors.RED,
            colorBorder: "transparent",
            borderRadius: 12,
            fontSize: 16,
            controlHeight: 48,
            fontWeight: 600,
            colorText: colors.WHITE,
            colorPrimaryHover: colors.RED,
            colorPrimaryActive: colors.RED,
            colorPrimary: colors.RED,
          },
        },
      }}
    >
      <Button type='primary' {...buttonProps} className='bg-gradient-primary' />
    </ConfigProvider>
  );
};

export default ButtonPrimary;
