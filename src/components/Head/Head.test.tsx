import { render } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Head } from "./Head";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Head Component", () => {
 beforeEach(() => {
  document.head.innerHTML = "";
 });

 it("sets the document title and adds meta, link, and preconnect elements", () => {
  renderWithTheme(<Head />);

  expect(document.title).toBe("Jessica Quirino - Software Engineer");
 });
});
