import { Collapse, ConfigProvider, GetProps } from "antd";
import React from "react";

const QuestionCollapse = (props: GetProps<typeof Collapse>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            colorText: "rgba(0, 0, 0, 0.85)",
            fontSize: 18,
            headerPadding: "12px 0px",
          },
        },
      }}
    >
      <Collapse bordered={false} ghost size='small' expandIconPosition='end' collapsible='header' {...props} />
    </ConfigProvider>
  );
};

export default QuestionCollapse;
