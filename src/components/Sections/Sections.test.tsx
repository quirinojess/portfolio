import { render, screen } from "@testing-library/react";
import { Sections } from "./Sections";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("renders Sections component", () => {
 renderWithTheme(
  <Sections flex="row" justify="start" align="start">
   <div data-testid="child-component">Test Child</div>
  </Sections>
 );

 const childElement = screen.getByTestId("child-component");
 expect(childElement).toBeInTheDocument();
});
