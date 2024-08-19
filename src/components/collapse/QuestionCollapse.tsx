import { Collapse, ConfigProvider, GetProps } from "antd";
import React from "react";

const QuestionCollapse = (props: GetProps<typeof Collapse>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {},
        },
      }}
    >
      <Collapse bordered={false} ghost size='small' expandIconPosition='end' collapsible='header' {...props} />
    </ConfigProvider>
  );
};

export default QuestionCollapse;
