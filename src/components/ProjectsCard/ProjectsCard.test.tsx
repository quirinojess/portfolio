import { render, screen } from "@testing-library/react";
import { ProjectsCard } from "./ProjectsCard";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { TCardContent } from "types/Card";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("ProjectsCard", () => {
 it("renders the image, title, and button", () => {
  const mockContent: TCardContent = {
   id: 1,
   image: {
    alt: "Test image",
    src: "test-image.jpg",
    title: "Test Image Title",
    width: "100",
    height: "100",
   },
   title: "Test Title",
   button: {
    target: "test-image.jpg",
    label: "Test image",
    ariaLabel: "Test image",
    ariaControls: "Test image",
    ariaExpanded: false,
    type: "button",
   },
  };

  renderWithTheme(<ProjectsCard content={mockContent} />);

  const imageElement = screen.getByAltText("Test image");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "test-image.jpg");

  const titleElement = screen.getByText("Test Title");
  expect(titleElement).toBeInTheDocument();

  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
 });
});
