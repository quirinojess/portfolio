import { createContext, useContext } from "react";
import { TScrollContext } from "types/Scroll";

const ScrollContext = createContext<TScrollContext | undefined>(undefined);

export const useScroll = (): TScrollContext => {
 const context = useContext(ScrollContext);
 if (!context) {
  throw new Error("useScroll must be used within a ScrollProvider");
 }
 return context;
};

export { ScrollContext };
