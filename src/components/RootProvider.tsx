import theme from "@/configs/theme";
import RootProviderContext from "@/context";
import { ConfigProvider } from "antd";
import React from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const RootProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConfigProvider theme={theme}>
      <RootProviderContext>
        <Header />
        {children}
        <Footer />
      </RootProviderContext>
    </ConfigProvider>
  );
};

export default RootProvider;
