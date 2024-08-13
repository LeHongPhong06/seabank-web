import React, { createContext, useState } from "react";

const CardContext = createContext(null);
const ProviderContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  return <CardContext.Provider value={{ theme }}>{children}</CardContext.Provider>;
};

export default ProviderContext;
