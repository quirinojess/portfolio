import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FilterCategories } from "./FilterCategories";
import { useHandleClick } from "hooks";

jest.mock("hooks", () => ({
 useHandleClick: jest.fn(),
}));

describe("FilterCategories Component", () => {
 const mockHandleClick = jest.fn();
 const mockContent = ["Category1", "Category2", "Category3"];
 beforeEach(() => {
  (useHandleClick as jest.Mock).mockReturnValue({
   handleClick: mockHandleClick,
  });
 });

 afterEach(() => {
  jest.clearAllMocks();
 });

 test("renders FilterCategories component", () => {
  render(<FilterCategories content={mockContent} />);
  const navbar = screen.getByTestId("filterCategories");
  expect(navbar).toBeInTheDocument();
  mockContent.forEach(item => {
   expect(screen.getByText(item)).toBeInTheDocument();
  });
 });

 test("calls handleClick on click and keydown events", () => {
  render(<FilterCategories content={mockContent} />);
  const navItems = screen.getAllByRole("button");

  navItems.forEach((item, index) => {
   fireEvent.click(item);
   expect(mockHandleClick).toHaveBeenCalledWith(
    mockContent[index],
    "",
    false,
    false
   );

   fireEvent.keyDown(item);
   expect(mockHandleClick).toHaveBeenCalledWith(
    mockContent[index],
    "",
    false,
    false
   );
  });
 });
});
