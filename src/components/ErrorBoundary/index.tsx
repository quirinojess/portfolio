import { Component, ErrorInfo } from "react";
import { TErrorBoundary, TErrorBoundaryState } from "types/Error";
import { Button, Headings, Paragraph, Sections } from "components";
import { GeneralContent } from "content";

class ErrorBoundary extends Component<TErrorBoundary, TErrorBoundaryState> {
 public state: TErrorBoundaryState = {
  hasError: false,
  errorDescription: {
   message: "",
   stack: "",
  },
 };

 public static getDerivedStateFromError(error: Error): TErrorBoundaryState {
  return {
   hasError: true,
   errorDescription: {
    message: error.message,
    stack: error.stack || "",
   },
  };
 }

 public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  console.error("Uncaught error:", error, errorInfo);
 }

 public render() {
  if (this.state.hasError) {
   const { buttons } = GeneralContent;
   const { reloadButton } = buttons;
   const errorContent = { text: this.state.errorDescription.message };
   return (
    <Sections flex={"column"} justify={"end"} align={"center"} id={"1"}>
     <Headings title={"An unexpected error occurred"} type={"h1"} />
     <Paragraph content={errorContent} proportion="full" />
     <Button content={reloadButton} />
    </Sections>
   );
  }

  return this.props.children;
 }
}

export default ErrorBoundary;
