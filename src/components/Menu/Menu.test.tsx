import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../../themes";
import { Menu } from "./Menu";

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

  render(
   <ThemeProvider theme={themeDark}>
    <MemoryRouter initialEntries={["/"]}>
     <Menu content={mockContent} />
     <LocationDisplay />
    </MemoryRouter>
   </ThemeProvider>
  );

  fireEvent.click(screen.getByText("Projects"));
  expect(screen.getByText("Current path: /projects")).toBeInTheDocument();
 });
});
