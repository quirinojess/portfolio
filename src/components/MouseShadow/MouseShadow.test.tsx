import { render, screen } from "@testing-library/react";
import { MouseShadow } from "./MouseShadow";
import useMousePosition from "hooks/useMousePosition";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

jest.mock("hooks/useMousePosition");

describe("MouseShadow", () => {
 it("passes mouse position to ShadowDiv", () => {
  (useMousePosition as jest.Mock).mockReturnValue({ x: 50, y: 100 });

  renderWithTheme(<MouseShadow />);

  const shadowDiv = screen.getByTestId("shadow-div");
  expect(shadowDiv).toHaveAttribute("x", "50");
  expect(shadowDiv).toHaveAttribute("y", "100");
 });
});
