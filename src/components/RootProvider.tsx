"use client";
import theme from "@/configs/theme";
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
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </ConfigProvider>
  );
};

export default RootProvider;
