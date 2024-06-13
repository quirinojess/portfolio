import { render, screen } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Social } from "./Social";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("renders Social component", () => {
 const mockContent = [
  { id: "1", name: "github" as const, url: "https://github.com" },
  { id: "2", name: "linkedin" as const, url: "https://linkedin.com" },
  { id: "3", name: "codepen" as const, url: "https://codepen.io" },
 ];

 renderWithTheme(<Social content={mockContent} />);

 mockContent.forEach(item => {
  const linkElement = screen.getByRole("link", { name: `social-${item.name}` });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", item.url);
 });
});
