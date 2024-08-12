"use client";
import search from "@/assets/images/search.svg";
import Image from "next/image";
import React from "react";
import SearchModal from "../modals/SearchModal";
import { useAppDispatch } from "@/hooks/redux";
import { useBreakpoint } from "@ant-design/pro-components";
import { Breakpoint } from "antd";
import { setOpenChangeDrawerSearch, setOpenChangeModalSearch } from "@/stores/slices/search";

const InconSearchHeader: React.FC = () => {
  const breakpointTablet: Breakpoint[] = ["sm", "md", "xs"];
  const breakpoint = useBreakpoint();
  const dispatch = useAppDispatch();
  const onSearch = () => {
    if (breakpointTablet.includes(breakpoint || "md")) {
      dispatch(setOpenChangeDrawerSearch(true));
    } else {
      dispatch(setOpenChangeModalSearch(true));
    }
  };
  return (
    <React.Fragment>
      <div className='relative size-6 hover:cursor-pointer' onClick={onSearch}>
        <Image alt='search' src={search} fill className='object-contain' />
      </div>
      <SearchModal />
    </React.Fragment>
  );
};

export default InconSearchHeader;
