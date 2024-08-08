import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import ScrollProvider from "contexts/ScrollContext";

const renderWithTheme = (component: ReactNode) => {
 return render(
  <ThemeProvider theme={ThemeDark}>
   <ScrollProvider>{component}</ScrollProvider>
  </ThemeProvider>
 );
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
  renderWithTheme(
   <ThemeProvider theme={{}}>
    <Timeline content={mockContent} />
   </ThemeProvider>
  );

  const timelineElement = screen.getByTestId("timeline");
  expect(timelineElement).toBeInTheDocument();
 });

 it("displays the correct content", () => {
  renderWithTheme(
   <ThemeProvider theme={{}}>
    <Timeline content={mockContent} />
   </ThemeProvider>
  );

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
