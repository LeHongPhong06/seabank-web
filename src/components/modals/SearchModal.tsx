"use client";
import React from "react";
import SearchPopup from "../searchs/SearchPopup";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

type Props = {};

const SearchModal: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <Drawer
        footer={false}
        height={"70%"}
        placement='bottom'
        open
        closable={false}
        styles={{
          header: {
            display: "none",
          },
          body: {
            padding: 0,
          },
          content: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          },
        }}
      >
        <SearchPopup />
      </Drawer>
    </React.Fragment>
  );
};

export default SearchModal;
