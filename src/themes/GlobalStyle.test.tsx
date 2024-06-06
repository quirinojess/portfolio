import { render } from "@testing-library/react";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark } from "@/themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={themeDark}>{component}</ThemeProvider>);
};

describe("<GlobalStyle />", () => {
 it("renders properly", () => {
  renderWithTheme(<GlobalStyle />);
  expect(document.head).toBeInTheDocument();
 });
});
