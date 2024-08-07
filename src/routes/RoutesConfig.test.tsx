import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RoutesConfig } from "./RoutesConfig";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import ScrollProvider from "contexts/ScrollContext";

const renderWithTheme = (component: ReactNode) => {
 return render(
  <ThemeProvider theme={ThemeDark}>
   <ScrollProvider>{component}</ScrollProvider>
  </ThemeProvider>
 );
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

 it("should render Home component", () => {
  renderWithTheme(
   <MemoryRouter initialEntries={["/*"]}>
    <RoutesConfig />
   </MemoryRouter>
  );

  expect(screen.getByTestId("home")).toBeInTheDocument();
 });

 it("should render Projects component", () => {
  renderWithTheme(
   <MemoryRouter initialEntries={["/projects"]}>
    <RoutesConfig />
   </MemoryRouter>
  );

  expect(screen.getByTestId("projects")).toBeInTheDocument();
 });
});
