import { createGlobalStyle, ThemeProps } from "styled-components";
import { TTheme } from "types/Theme";

const GlobalStyle = createGlobalStyle<ThemeProps<TTheme>>`
body {
font-family: ${props => props.theme.typography.primary};
background: ${props => props.theme.colors.darkDeep}; 
}
::selection {
background: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.darkDeep};
}   
   
`;

export { GlobalStyle };
