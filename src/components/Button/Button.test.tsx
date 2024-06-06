import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";
import { themeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { IButtonContent } from "types/Button";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={themeDark}>{component}</ThemeProvider>);
};

const mockContent: IButtonContent = {
 label: "Test Button",
 target: "testTarget",
 ariaControls: "testControls",
 ariaExpanded: false,
 ariaLabel: "testLabel",
 type: "button",
};

const handleClick = jest.fn();

jest.mock("../../hooks", () => ({
 useHandleClick: () => jest.fn(),
}));

describe("Button", () => {
 it("renders correctly", () => {
  renderWithTheme(
   <Button
    content={mockContent}
    onClick={handleClick}
    onKeyDown={handleClick}
   />
  );
  expect(screen.getByRole("button")).toHaveTextContent("Test Button");
 });

 it("calls handleClick on click", () => {
  renderWithTheme(
   <Button
    content={mockContent}
    onClick={handleClick}
    onKeyDown={handleClick}
   />
  );
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalled();
 });
});
