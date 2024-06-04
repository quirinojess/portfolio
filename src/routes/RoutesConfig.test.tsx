import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RoutesConfig } from "./RoutesConfig";
import { themeDark } from "../themes/ThemeDark";

describe("RoutesConfig", () => {
 it("should render Anyone component for default route", () => {
  render(
   <ThemeProvider theme={themeDark}>
    <MemoryRouter initialEntries={["/*"]}>
     <RoutesConfig />
    </MemoryRouter>
   </ThemeProvider>
  );

  expect(screen.getByTestId("home")).toBeInTheDocument();
 });

 it("should render Home component for default route", () => {
  render(
   <ThemeProvider theme={themeDark}>
    <MemoryRouter initialEntries={["/"]}>
     <RoutesConfig />
    </MemoryRouter>
   </ThemeProvider>
  );

  expect(screen.getByTestId("home")).toBeInTheDocument();
 });

 it("should render Projects component for default route", () => {
  render(
   <ThemeProvider theme={themeDark}>
    <MemoryRouter initialEntries={["/projects"]}>
     <RoutesConfig />
    </MemoryRouter>
   </ThemeProvider>
  );

  expect(screen.getByTestId("projects")).toBeInTheDocument();
 });
});
