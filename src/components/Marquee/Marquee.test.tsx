import { render, screen } from "@testing-library/react";
import { Marquee } from "./Marquee";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Marquee", () => {
 it("renders the correct number of MarqueeText components", () => {
  const content = [
   { id: "1", text: "Test 1", isHighlighted: false },
   { id: "2", text: "Test 2", isHighlighted: true },
  ];

  renderWithTheme(<Marquee content={content} />);

  content.forEach(item => {
   const elements = screen.getAllByText(item.text);
   expect(elements).toHaveLength(10);
  });
 });
});
