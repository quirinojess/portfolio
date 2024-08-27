import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import ScrollProvider from "context/ScrollContext";

const renderWithTheme = (component: ReactNode) => {
 return render(
  <MemoryRouter>
   <ThemeProvider theme={ThemeDark}>
    <ScrollProvider>{component}</ScrollProvider>
   </ThemeProvider>
  </MemoryRouter>
 );
};

describe("Header component", () => {
 it("renders correctly", () => {
  renderWithTheme(<Header />);

  const logoElement = screen.getByTestId("logo");
  expect(logoElement).toBeInTheDocument();

  const menuElement = screen.getByTestId("menu");
  expect(menuElement).toBeInTheDocument();
 });
});
