"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setOpenChangeDrawerSearch, setOpenChangeModalSearch } from "@/stores/slices/search";
import { useBreakpoint } from "@ant-design/pro-components";
import { Drawer, Modal } from "antd";
import { Breakpoint } from "antd/lib";
import React, { CSSProperties } from "react";
import SearchPopup from "../searchs/SearchPopup";

const SearchModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const breakpoint = useBreakpoint();
  const breakpointTablet: Breakpoint[] = ["sm", "md", "xs"];
  const stylesBody: CSSProperties = {
    paddingBlock: breakpointTablet.includes(breakpoint || "md") ? 16 : 24,
    paddingInline: breakpointTablet.includes(breakpoint || "md") ? 16 : 64,
  };
  const { drawerSearch, modalSearch } = useAppSelector((state) => state.search);
  return (
    <React.Fragment>
      <Modal
        footer={false}
        width={1312}
        open={modalSearch}
        closable={false}
        styles={{
          header: { display: "none" },
          footer: { display: "none" },
          body: { overflow: "hidden" },
          content: stylesBody,
        }}
        onCancel={() => dispatch(setOpenChangeModalSearch(false))}
      >
        <SearchPopup />
      </Modal>
      <Drawer
        footer={false}
        height={"75%"}
        open={drawerSearch}
        placement='bottom'
        onClose={() => dispatch(setOpenChangeDrawerSearch(false))}
        closable={false}
        styles={{
          header: { display: "none" },
          footer: { display: "none" },
          body: stylesBody,
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
