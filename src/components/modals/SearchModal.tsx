"use client";
import { Drawer, Modal } from "antd";
import { Breakpoint } from "antd/lib";
import React from "react";
import SearchPopup from "../searchs/SearchPopup";

const SearchModal: React.FC = () => {
  const breakpointTablet: Breakpoint[] = ["sm", "md", "xs"];
  // const stylesBody: CSSProperties = {
  //   paddingBlock: breakpointTablet.includes(breakpoint || "md") ? 16 : 24,
  //   paddingInline: breakpointTablet.includes(breakpoint || "md") ? 16 : 64,
  // };
  return (
    <React.Fragment>
      <Modal
        footer={false}
        width={1312}
        open={false}
        closable={false}
        styles={{
          header: { display: "none" },
          footer: { display: "none" },
          body: { overflow: "hidden" },
        }}
        // onCancel={() => dispatch(setOpenChangeModalSearch(false))}
      >
        <SearchPopup />
      </Modal>
      <Drawer
        footer={false}
        height={"75%"}
        open={false}
        placement='bottom'
        // onClose={() => dispatch(setOpenChangeDrawerSearch(false))}
        closable={false}
        styles={{
          header: { display: "none" },
          footer: { display: "none" },
          // body: stylesBody,
          content: {
            overflow: "hidden",
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
