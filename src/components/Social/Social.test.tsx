import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Social } from "./Social";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Social component", () => {
 const mockContent = [
  { id: "1", name: "github", url: "https://github.com" },
  { id: "2", name: "linkedin", url: "https://linkedin.com" },
  { id: "3", name: "codepen", url: "https://codepen.io" },
 ];

 it("renders social links correctly", () => {
  renderWithTheme(<Social content={mockContent} />);

  mockContent.forEach(item => {
   const linkElement = screen.getByTestId(item.name);

   expect(linkElement).toBeInTheDocument();
   expect(linkElement).toHaveAttribute("href", item.url);
  });
 });
});
