import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../../themes";
import Logo from "./logo";

describe("Logo", () => {
 it("renders without crashing", () => {
  render(
   <ThemeProvider theme={themeDark}>
    <Logo />
   </ThemeProvider>
  );
  expect(screen.getByTestId("logotype")).toBeInTheDocument();
 });
});
