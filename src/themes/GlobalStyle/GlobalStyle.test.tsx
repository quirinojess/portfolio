import { render } from "@testing-library/react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("<GlobalStyle />", () => {
 it("renders properly", () => {
  renderWithTheme(<GlobalStyle />);
  expect(document.head).toBeInTheDocument();
 });
});
