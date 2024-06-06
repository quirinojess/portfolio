import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { Menu } from "./Menu";
import { themeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={themeDark}>{component}</ThemeProvider>);
};

const LocationDisplay = () => {
 const location = useLocation();
 return <div>Current path: {location.pathname}</div>;
};

describe("Menu", () => {
 it("navigates to the correct path when a menu item is clicked", () => {
  const mockContent = [
   {
    id: 0,
    path: "/",
    label: "Home",
   },
   {
    id: 1,
    path: "/projects",
    label: "Projects",
   },
  ];

  renderWithTheme(
   <MemoryRouter initialEntries={["/"]}>
    <Menu content={mockContent} />
    <LocationDisplay />
   </MemoryRouter>
  );

  fireEvent.click(screen.getByText("Projects"));
  expect(screen.getByText("Current path: /projects")).toBeInTheDocument();
 });
});
