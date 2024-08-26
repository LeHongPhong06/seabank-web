import React from "react";
import ProviderProductContext from "./product";

const RootProviderContext = ({ children }: { children: React.ReactNode }) => {
  return <ProviderProductContext>{children}</ProviderProductContext>;
};

export default RootProviderContext;
