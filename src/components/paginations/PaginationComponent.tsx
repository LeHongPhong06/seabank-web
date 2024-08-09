import { colors } from "@/constants/colors";
import { LeftOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Pagination } from "antd";
import React from "react";

type Props = {};

const PaginationComponent: React.FC = (props: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            borderRadius: 8,
            colorPrimaryActive: colors.RED,
            colorPrimary: colors.RED,
            colorPrimaryHover: colors.RED,
          },
          Button: {
            borderRadius: 8,
          },
        },
      }}
    >
      <Pagination
        defaultCurrent={1}
        total={50}
        prevIcon={<LeftOutlined className='text-[10px] border-[1px] p-[10px] rounded-lg' />}
      />
    </ConfigProvider>
  );
};

export default PaginationComponent;
