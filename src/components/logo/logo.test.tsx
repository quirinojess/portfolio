import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";
import { themeDark } from "@/themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={themeDark}>{component}</ThemeProvider>);
};

describe("Logo", () => {
 it("renders without crashing", () => {
  renderWithTheme(<Logo />);
  expect(screen.getByTestId("logotype")).toBeInTheDocument();
 });
});
