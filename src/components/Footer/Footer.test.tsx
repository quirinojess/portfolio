import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Footer } from "./Footer";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Footer component", () => {
 test("renders Footer component with marquee and social elements", () => {
  renderWithTheme(<Footer />);

  const marqueeElement = screen.getByTestId("marquee");
  expect(marqueeElement).toBeInTheDocument();

  const socialElement = screen.getByTestId("social");
  expect(socialElement).toBeInTheDocument();
 });
});
