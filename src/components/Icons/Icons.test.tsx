import { render } from "@testing-library/react";
import { ThemeDark } from "themes";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { Icons } from "./Icons";
import { ICONSTYPES } from "constants/icons";

const renderWithTheme = (component: ReactNode) => {
 return render(<ThemeProvider theme={ThemeDark}>{component}</ThemeProvider>);
};

describe("Icons", () => {
 ICONSTYPES.forEach(type => {
  it(`matches snapshot for type "${type}"`, () => {
   const { asFragment } = renderWithTheme(<Icons type={type} />);
   expect(asFragment()).toMatchSnapshot();
  });
 });
});
