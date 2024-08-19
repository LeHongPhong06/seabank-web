import { useBreakpoint } from "@ant-design/pro-components";
import { Breakpoint } from "antd";

export const useBreakpointScreen = () => {
  const breakpoint = useBreakpoint();
  const breakpointTablet: Breakpoint[] = ["xs", "sm"];
  const isMobile = breakpointTablet.includes(breakpoint || "sm");
  const isTablet = !breakpointTablet.includes(breakpoint || "sm");
  return [isMobile, isTablet];
};
