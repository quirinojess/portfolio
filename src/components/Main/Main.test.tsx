import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Main } from "./Main";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Main component", () => {
 test("renders Main component with children and testId", () => {
  renderWithTheme(<Main testId="main-component">Test Content</Main>);

  const mainElement = screen.getByTestId("main-component");
  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveTextContent("Test Content");
 });
});
