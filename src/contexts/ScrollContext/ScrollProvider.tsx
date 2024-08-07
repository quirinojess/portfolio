import React, { useState, useMemo } from "react";
import { ScrollContext } from "./ScrollContext";
import { IScrollProvider } from "types/Scroll";

export const ScrollProvider: React.FC<IScrollProvider> = ({ children }) => {
 const [scrollTarget, setScrollTarget] = useState<string | null>(null);

 const value = useMemo(
  () => ({ scrollTarget, setScrollTarget }),
  [scrollTarget]
 );

 return (
  <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
 );
};
