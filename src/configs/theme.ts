import { colors } from "@/constants/colors";
import { ThemeConfig } from "antd";

export default {
  components: {
    Select: {
      borderRadiusLG: 12,
      borderRadiusSM: 8,
      // colorBorder: colors.GRAY,
    },
    // Input: {
    //   borderRadiusLG: 12,
    //   borderRadius: 12,
    //   borderRadiusOuter: 12,
    //   colorBgBlur: colors.RED,
    // },
  },
  token: {
    wireframe: false,
    sizeStep: 4,
    sizeUnit: 4,
    // colorPrimary: colors.PRIMARY_COLOR,
    // colorText: colors.TEXT,
  },
} as ThemeConfig;
