import { render, screen } from "@testing-library/react";
import { Headings } from "./Headings";
import { IHeadings } from "types/Heading";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Headings", () => {
 test("renders correctly", () => {
  const mockContent: IHeadings = {
   title: "Test Title",
   type: "h1",
  };

  renderWithTheme(<Headings {...mockContent} />);

  expect(screen.getByText("Test Title")).toBeInTheDocument();
 });

 test("renders H1 when type is h1", () => {
  const mockContent: IHeadings = {
   title: "Test Title",
   type: "h1",
  };

  renderWithTheme(<Headings {...mockContent} />);

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
 });

 test("renders H2 when type is h2", () => {
  const mockContent: IHeadings = {
   title: "Test Title",
   type: "h2",
  };

  renderWithTheme(<Headings {...mockContent} />);

  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
 });
});
