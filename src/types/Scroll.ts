import { ReactNode } from "react";

export type TScrollContext = {
    scrollTarget: string | null;
    setScrollTarget: (target: string | null) => void;
  }

  export type TScrollProvider ={
    children: ReactNode;
   }
  