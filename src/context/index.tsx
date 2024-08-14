import React from "react";
import ProviderCardContext from "./card";

const RootProviderContext = ({ children }: { children: React.ReactNode }) => {
  return <ProviderCardContext>{children}</ProviderCardContext>;
};

export default RootProviderContext;
