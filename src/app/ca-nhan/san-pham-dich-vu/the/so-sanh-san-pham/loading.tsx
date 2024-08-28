import { colors } from "@/constants/colors";
import { ConfigProvider, Spin } from "antd";
import React from "react";

const LoadingHomePage = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Spin: { colorPrimary: colors.RED, dotSize: 32 },
        },
      }}
    >
      <div className='flex h-screen w-screen justify-center items-center bg-white'>
        <Spin />
      </div>
    </ConfigProvider>
  );
};

export default LoadingHomePage;
