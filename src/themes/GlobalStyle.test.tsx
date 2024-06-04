import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { themeDark } from "./ThemeDark";
import { GlobalStyle } from "./GlobalStyle";

describe("<GlobalStyle />", () => {
 it("renders properly", () => {
  render(
   <ThemeProvider theme={themeDark}>
    <GlobalStyle />
   </ThemeProvider>
  );
  expect(document.head).toBeInTheDocument();
 });
});
