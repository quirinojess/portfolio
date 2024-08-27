import { render, screen, fireEvent } from "@testing-library/react";
import { useState, ReactNode } from "react";
import ErrorBoundary from ".";
import { ThemeProvider } from "styled-components";
import { ThemeDark } from "themes";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

function Mock1() {
 const [data, setData] = useState<{ id: string }[]>([{ id: "Test Id" }]);
 return (
  <>
   {data[0].id}
   <button onClick={() => setData([])}>Force Error</button>
  </>
 );
}

describe("ErrorBoundary", () => {
 it("renders child component correctly", () => {
  renderWithTheme(
   <ErrorBoundary>
    <Mock1 />
   </ErrorBoundary>
  );

  expect(screen.getByText("Test Id")).toBeInTheDocument();
 });

 it("catches error and displays fallback UI", () => {
  renderWithTheme(
   <ErrorBoundary>
    <Mock1 />
   </ErrorBoundary>
  );

  fireEvent.click(screen.getByText("Force Error"));

  expect(screen.queryByText("Test Id")).not.toBeInTheDocument();
  expect(screen.getByText("An unexpected error occurred")).toBeInTheDocument();
 });
});
