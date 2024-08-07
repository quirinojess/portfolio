import { createContext, useContext } from "react";
import { IScrollContext } from "types/Scroll";

const ScrollContext = createContext<IScrollContext | undefined>(undefined);

export const useScroll = (): IScrollContext => {
 const context = useContext(ScrollContext);
 if (!context) {
  throw new Error("useScroll must be used within a ScrollProvider");
 }
 return context;
};

export { ScrollContext };
