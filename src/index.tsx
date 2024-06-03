import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./themes";
import { themeDark } from "./themes/";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <ThemeProvider theme={themeDark}>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalStyle />
    <AppRoutes />
   </BrowserRouter>
  </ThemeProvider>
 </React.StrictMode>
);
