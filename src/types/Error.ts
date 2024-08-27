import { ReactNode } from "react";

export type TErrorBoundary = {
 children?: ReactNode;
}

export type TErrorBoundaryState = {
 hasError: boolean;
 errorDescription: {
  message: string;
  stack: string;
 };
}