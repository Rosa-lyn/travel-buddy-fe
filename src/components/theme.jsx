import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    softViolet: "#BB6BD9",
    lightGrey: "#C5C5C5"
  },
  fonts: ["Coiny", "Helvetica Neue"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  stroke: {
    width: "1px",
    style: "solid"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;