import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./themes";
import { ThemeDark } from "./themes/";
import RoutesConfig from "./routes";
import { Footer, Header, MouseShadow } from "components";

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <ThemeProvider theme={ThemeDark}>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalStyle />
    <Header />
    <MouseShadow />
    <RoutesConfig />
    <Footer />
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);
