import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./themes";
import { ThemeDark } from "./themes/";
import RoutesConfig from "./routes";
import { Footer, Header, MouseShadow, ErrorBoundary } from "components";
import { ScrollContextProvider, ProjectContextProvider } from "context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
 <ThemeProvider theme={ThemeDark}>
  <ScrollContextProvider>
   <ProjectContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <GlobalStyle />
     <ToastContainer />
     <Header />
     <MouseShadow />
     <ErrorBoundary>
      <RoutesConfig />
     </ErrorBoundary>
     <Footer />
    </BrowserRouter>
   </ProjectContextProvider>
  </ScrollContextProvider>
 </ThemeProvider>
);
