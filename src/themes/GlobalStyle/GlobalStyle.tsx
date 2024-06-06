import { createGlobalStyle, ThemeProps } from "styled-components";
import { ITheme } from "../types";

const GlobalStyle = createGlobalStyle<ThemeProps<ITheme>>`
    body {
        font-family: ${props => props.theme.typography.primary};
        background: ${props => props.theme.colors.darkDeep};
    }
`;

export { GlobalStyle };
