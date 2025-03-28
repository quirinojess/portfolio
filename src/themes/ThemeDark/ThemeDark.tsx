import { TTheme } from "types/Theme";

const ThemeDark: TTheme = {
 colors: {
  transparency: "rgba(51, 51, 51, 0.7)",
  white: "#f9f9f9",
  darkDeep: "#000000",
  darkMedium: "#333333",
  primary: "#D9E371",
  secondary: "#EE3368",
 },
 typography: {
  primary: "'Inter', sans-serif",
  h1: "3em",
  h2: "2em",
  h3: "1.5em",
  h4: "1.3em",
  h5: "1.2em",
  h6: "0.9em",
  p: "1em",
  verySmall: "0.6em",
  small: "0.8em",
  medium: "1.1em",
  veryMedium: "1.4em",
  extraMedium: "1.6em",
  large: "1.8em",
  veryLarge: "4em",
  extraLarge: "6em",
  big: "8em",
 },
 spacing: {
  extraSmall: "4px",
  verySmall: "6px",
  small: "8px",
  medium: "16px",
  extraMedium: "24px",
  large: "32px",
  veryLarge: "40px",
  extraLarge: "48px",
  big: "56px",
  mediumBig: "84px",
  veryBig: "96px",
  extraBig: "164px",
  center: "0 auto",
 },
 sizes: {
  hiperSmall: "2px",
  extraSmall: "8px",
  verySmall: "16px",
  mediumSmall: "48px",
  small: "64px",
  extraMedium: "80px",
  medium: "160px",
  large: "320px",
 },
 proportions: {
  full: "100%",
  threeFourths: "70%",
  half: "45%",
  oneFourth: "25%",
 },
 breakpoints: {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  large: "1900px",
 },
 shadows: {
  small: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  medium: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  large: "0px 10px 20px rgba(0, 0, 0, 0.2)",
 },
 borders: {
  thin: "1px solid",
  thick: "2px solid",
 },
 borderRadius: {
  small: "10px",
  medium: "20px",
  large: "30px",
 },
 transitions: {
  veryShort: "0.4s",
  short: "0.8s",
  medium: "4s",
  long: "8s",
  extremeLong: "32s",
 },
 strokes: {
  thin: "1",
  regular: "2",
  bold: "3",
  extraBold: "4",
  black: "5",
  extraBlack: "8",
 },
};

export { ThemeDark };
