import { render, screen } from "@testing-library/react";
import { Figure } from "./Figure";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Figure", () => {
 it("renders with correct attributes", () => {
  renderWithTheme(
   <Figure
    src="test-src"
    alt="test-alt"
    title="test-title"
    width="100"
    height="100"
   />
  );

  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", "test-src");
  expect(img).toHaveAttribute("alt", "test-alt");
  expect(img).toHaveAttribute("title", "test-title");
  expect(img).toHaveAttribute("width", "100");
  expect(img).toHaveAttribute("height", "100");
 });
});
