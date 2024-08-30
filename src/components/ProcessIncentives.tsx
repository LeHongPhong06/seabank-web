import { colors } from "@/constants/colors";
import { ConfigProvider, GetProps, Progress } from "antd";

const ProcessIncentives = (props: GetProps<typeof Progress>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            defaultColor: colors.RED,
            colorSuccess: colors.RED,
          },
        },
      }}
    >
      <Progress {...props} showInfo={false} status='active' size={"small"} />
    </ConfigProvider>
  );
};

export default ProcessIncentives;
