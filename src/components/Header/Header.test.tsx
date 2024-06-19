import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Header } from "./Header";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("renders Header component", () => {
 renderWithTheme(<Header />);

 const logoElement = screen.getByTestId("logo");
 expect(logoElement).toBeInTheDocument();

 const menuElement = screen.getByTestId("menu");
 expect(menuElement).toBeInTheDocument();
});
