import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Menu } from "./Menu";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { IMenuContent } from "types/Menu";
import ScrollProvider from "context/ScrollContext";

const renderWithTheme = (component: React.ReactNode) => {
 return render(
  <ThemeProvider theme={ThemeDark}>
   <ScrollProvider>{component}</ScrollProvider>
  </ThemeProvider>
 );
};

describe("Menu", () => {
 it("navigates to the correct path when a menu item is clicked", async () => {
  const mockContent: IMenuContent = [
   {
    id: "1",
    path: "/",
    label: "Home",
   },
  ];

  renderWithTheme(
   <MemoryRouter initialEntries={["/"]}>
    <Menu content={mockContent} />
   </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Home"));

  const currentPathElement = await screen.findByText("Home");
  expect(currentPathElement).toBeInTheDocument();
 });
});
