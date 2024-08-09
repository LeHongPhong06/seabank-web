"use client";
import { Drawer, Modal } from "antd";
import React from "react";
import SearchPopup from "../searchs/SearchPopup";
import { useBreakpoint } from "@ant-design/pro-components";

type Props = {};

const SearchModal: React.FC = (props: Props) => {
  const breakpoint = useBreakpoint();
  return (
    <React.Fragment>
      {(breakpoint === "lg" || breakpoint === "xl" || breakpoint === "xxl") && (
        <Modal
          footer={false}
          width={1312}
          // open
          closable={false}
          styles={{
            header: {
              display: "none",
            },
            content: {
              paddingBlock: 24,
              paddingInline: 64,
            },
          }}
        >
          <SearchPopup />
        </Modal>
      )}
      {(breakpoint === "xs" || breakpoint === "md" || breakpoint === "sm") && (
        <Drawer
          footer={false}
          height={"70%"}
          // open
          placement='bottom'
          closable={false}
          styles={{
            header: {
              display: "none",
            },
            body: {
              padding: 16,
            },
            content: {
              maxWidth: "100vw",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
          }}
        >
          <SearchPopup />
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default SearchModal;
