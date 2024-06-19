import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { Menu } from "./Menu";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

const LocationDisplay = () => {
 const location = useLocation();
 return <div>Current path: {location.pathname}</div>;
};

describe("Menu", () => {
 it("navigates to the correct path when a menu item is clicked", () => {
  const mockContent = [
   {
    id: "1",
    path: "/",
    label: "Home",
   },
  ];

  renderWithTheme(
   <MemoryRouter initialEntries={["/"]}>
    <Menu content={mockContent} />
    <LocationDisplay />
   </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Home"));
  expect(screen.getByText("Current path: /")).toBeInTheDocument();
 });
});
