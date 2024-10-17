import { useState, useMemo } from "react";
import { ScrollContext } from "./ScrollContext";
import { TScrollProvider } from "types/Scroll";

const ScrollProvider = ({ children }: TScrollProvider) => {
 const [scrollTarget, setScrollTarget] = useState<string | null>(null);

 const value = useMemo(
  () => ({ scrollTarget, setScrollTarget }),
  [scrollTarget]
 );

 return (
  <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
 );
};

export { ScrollProvider };
