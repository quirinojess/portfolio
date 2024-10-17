import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { TButtonContent } from "types/Button";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

const mockContent: TButtonContent = {
 label: "Test Button",
 target: "testTarget",
 ariaControls: "testControls",
 ariaExpanded: false,
 ariaLabel: "testLabel",
 type: "button",
};

const handleClick = jest.fn();

jest.mock("../../hooks", () => ({
 useHandleClick: () => ({ handleClick }),
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
  const button = screen.getByRole("button", { name: /testLabel/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Test Button");
 });

 it("calls handleClick on click", () => {
  renderWithTheme(
   <Button
    content={mockContent}
    onClick={handleClick}
    onKeyDown={handleClick}
   />
  );
  const button = screen.getByRole("button", { name: /testLabel/i });
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
 });
});
