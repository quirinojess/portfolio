import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Paragraph", () => {
 it("renders the text content", () => {
  const mockContent = {
   text: "Test paragraph",
  };
  const mockProportion = "full";

  renderWithTheme(
   <Paragraph content={mockContent} proportion={mockProportion} />
  );

  const paragraphElement = screen.getByText("Test paragraph");
  expect(paragraphElement).toBeInTheDocument();
 });

 it("applies the correct proportion", () => {
  const mockContent = {
   text: "Test paragraph",
  };
  const mockProportion = "half";

  renderWithTheme(
   <Paragraph content={mockContent} proportion={mockProportion} />
  );

  const paragraphElement = screen.getByText(mockContent.text);
  expect(paragraphElement).toHaveStyle(`width: 50%`);
 });
});
