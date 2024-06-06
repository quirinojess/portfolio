import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";
import { IHeading } from "types/Heading";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Heading", () => {
 test("renders correctly", () => {
  const mockContent: IHeading = {
   title: "Test Title",
   subtitle: "Test Subtitle",
   activeH1: true,
  };

  renderWithTheme(<Heading content={mockContent} />);

  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
 });

 test("renders H1 when activeH1 is true", () => {
  const mockContent: IHeading = {
   title: "Test Title",
   subtitle: "Test Subtitle",
   activeH1: true,
  };

  renderWithTheme(<Heading content={mockContent} />);
  expect(screen.getByRole("heading", { level: 1 })).not.toBeNull();
  expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
 });

 test("renders H2 when activeH1 is false", () => {
  const mockContent: IHeading = {
   title: "Test Title",
   subtitle: "Test Subtitle",
   activeH1: false,
  };

  renderWithTheme(<Heading content={mockContent} />);
  expect(screen.getByRole("heading", { level: 2 })).not.toBeNull();
  expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
 });
});
