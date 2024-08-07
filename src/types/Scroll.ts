import { ReactNode } from "react";

export interface IScrollContext {
    scrollTarget: string | null;
    setScrollTarget: (target: string | null) => void;
  }

  export interface IScrollProvider{
    children: ReactNode;
   }
  