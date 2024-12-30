import { render, screen } from "@testing-library/react";
import { List } from "./List";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import ScrollProvider from "context/ScrollContext";

const renderWithTheme = (component: ReactNode) => {
 return render(
  <ThemeProvider theme={ThemeDark}>
   <ScrollProvider>{component}</ScrollProvider>
  </ThemeProvider>
 );
};

test("renders list items correctly", () => {
 const content = [
  {
   id: "1",
   title: "Test Item 1",
   description: "Test Description 1",
   link: "https://test1.com",
   linkDescription: "Test Link 1",
  },
  {
   id: "2",
   title: "Test Item 2",
   description: "Test Description 2",
   link: "https://test2.com",
   linkDescription: "Test Link 2",
  },
 ];

 renderWithTheme(<List content={content} isLink={true} isModal={false} />);

 const item1 = screen.getByText("Test Item 1");
 const item2 = screen.getByText("Test Item 2");

 expect(item1).toBeInTheDocument();
 expect(item2).toBeInTheDocument();
});
