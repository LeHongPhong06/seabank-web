"use client";
import { Breakpoint } from "antd";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

export function getBreakPoint(width: number): Breakpoint {
  switch (true) {
    case width <= 480:
      return "xs";
    case width <= 576 && width > 480:
      return "sm";
    case width <= 768 && width > 576:
      return "md";
    case width <= 992 && width > 768:
      return "lg";
    case width <= 1200 && width > 992:
      return "xl";
    default:
      return "xxl";
  }
}

export const useGetBreakpointCurrent = () => {
  const size = useWindowDimensions();
  const width = size?.width || 0;
  return getBreakPoint(width);
};
