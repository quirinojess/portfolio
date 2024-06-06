import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RoutesConfig } from "./RoutesConfig";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("RoutesConfig", () => {
 it("should render Anyone component for default route", () => {
  renderWithTheme(
   <MemoryRouter initialEntries={["/*"]}>
    <RoutesConfig />
   </MemoryRouter>
  );

  expect(screen.getByTestId("home")).toBeInTheDocument();
 });

 it("should render Home component for default route", () => {
  render(
   <ThemeProvider theme={ThemeDark}>
    <MemoryRouter initialEntries={["/"]}>
     <RoutesConfig />
    </MemoryRouter>
   </ThemeProvider>
  );

  expect(screen.getByTestId("home")).toBeInTheDocument();
 });

 it("should render Projects component for default route", () => {
  render(
   <ThemeProvider theme={ThemeDark}>
    <MemoryRouter initialEntries={["/projects"]}>
     <RoutesConfig />
    </MemoryRouter>
   </ThemeProvider>
  );

  expect(screen.getByTestId("projects")).toBeInTheDocument();
 });
});
