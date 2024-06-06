import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Logo", () => {
 it("renders without crashing", () => {
  renderWithTheme(<Logo />);
  expect(screen.getByTestId("logotype")).toBeInTheDocument();
 });
});
