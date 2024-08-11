"use client";
import { colors } from "@/constants/colors";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ConfigProvider, Pagination, PaginationProps } from "antd";
import React from "react";

type Props = {
  pageCurrent: number;
  pageSize: number;
  total: number;
  onChange?: (page: number, pageSize: number) => void;
};

const PaginationComponent: React.FC<Props> = ({ pageCurrent, pageSize, total, onChange }) => {
  const itemRender: PaginationProps["itemRender"] = (page, type, originalElement) => {
    switch (type) {
      case "next":
        return (
          <div className='size-8 flex items-center justify-center border-[1px] border-solid border-gray rounded-lg'>
            <RightOutlined className='text-gray text-sm' />
          </div>
        );
      case "prev":
        return (
          <div className='size-8 flex items-center justify-center border-[1px] border-solid border-gray rounded-lg'>
            <LeftOutlined className='text-gray text-sm' />
          </div>
        );
      case "page":
        return (
          <div
            className={`size-8 flex items-center justify-center ${
              page !== pageCurrent ? "border-[1px] border-solid border-gray" : "bg-gradient-primary bg-clip-text"
            }  rounded-lg`}
          >
            <p className={`${page === pageCurrent ? "text-transparent" : null}`}>{page}</p>
          </div>
        );
      default:
        return originalElement;
    }
  };
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
        defaultCurrent={pageCurrent}
        total={total}
        onChange={onChange}
        pageSize={pageSize}
        current={pageCurrent}
        itemRender={itemRender}
        showSizeChanger={false}
      />
    </ConfigProvider>
  );
};

export default PaginationComponent;
