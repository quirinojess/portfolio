import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Logo", () => {
 it("renders without crashing", () => {
  renderWithTheme(
   <Router>
    <Logo />
   </Router>
  );
  expect(screen.getByTestId("logotype")).toBeInTheDocument();
 });
});
