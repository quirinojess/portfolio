import React from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/css/fonts.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Atkinson Hyperlegible', sans-serif;
  
  }
`;

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
   <GlobalStyle />
   <AppRoutes />
  </BrowserRouter>
 </React.StrictMode>
);
