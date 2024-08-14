"use client";
import theme from "@/configs/theme";
import RootProviderContext from "@/context";
import store from "@/stores";
import { ConfigProvider } from "antd";
import React from "react";
import { Provider } from "react-redux";
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
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </RootProviderContext>
    </ConfigProvider>
  );
};

export default RootProvider;
