import { createGlobalStyle, ThemeProps } from "styled-components";
import { Theme } from "./types";

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
    body {
        font-family: ${props => props.theme.fonts.primary};
    }
`;

export { GlobalStyle };
