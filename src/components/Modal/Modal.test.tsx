import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Modal", () => {
 it("renders correctly", () => {
  const setIsOpenModal = jest.fn();
  renderWithTheme(<Modal setIsOpenModal={setIsOpenModal}>Test</Modal>);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
 });

 it("calls setIsOpenModal when clicked", () => {
  const setIsOpenModal = jest.fn();
  renderWithTheme(<Modal setIsOpenModal={setIsOpenModal}>Test</Modal>);

  fireEvent.click(screen.getByRole("dialog"));
  expect(setIsOpenModal).toHaveBeenCalledWith(false);
 });
});
