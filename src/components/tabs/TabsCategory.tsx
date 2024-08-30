import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Tabs } from "antd";

const TabsCategory = (props: GetProps<typeof Tabs>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: colors.RED,
            colorText: colors.GRAY,
            itemSelectedColor: colors.RED,
            itemColor: colors.GRAY,
            titleFontSize: 16,
            itemHoverColor: colors.TEXT,
            itemActiveColor: colors.TEXT,
          },
        },
      }}
    >
      <Tabs {...props} more={{ trigger: "click" }} />
    </ConfigProvider>
  );
};

export default TabsCategory;
