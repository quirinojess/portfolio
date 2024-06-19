import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Timeline component", () => {
 const mockContent = [
  {
   id: "1",
   date: "2022",
   company: "Test Company",
   title: "Test Title",
   description: "Test Description",
  },
 ];

 it("renders without crashing", () => {
  renderWithTheme(<Timeline content={mockContent} />);
  const timelineElement = screen.getByTestId("timeline");
  expect(timelineElement).toBeInTheDocument();
 });

 it("displays the correct content", () => {
  renderWithTheme(<Timeline content={mockContent} />);
  const dateElement = screen.getByText("2022");
  const companyElement = screen.getByText("Test Company");
  const titleElement = screen.getByText("Test Title");
  const descriptionElement = screen.getByText("Test Description");

  expect(dateElement).toBeInTheDocument();
  expect(companyElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
 });
});
