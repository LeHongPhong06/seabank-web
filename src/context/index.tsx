import React from "react";
import ProviderCardContext from "./card";
import ProviderProductContext from "./product";

const RootProviderContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderCardContext>
      <ProviderProductContext>{children}</ProviderProductContext>
    </ProviderCardContext>
  );
};

export default RootProviderContext;
