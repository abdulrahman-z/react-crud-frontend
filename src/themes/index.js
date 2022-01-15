import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React, { useState } from "react";

export const ThemeContext = React.createContext({});

export default function ThemeConfig({ children }) {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3751FF",
      },
      ineeColor: {
        main: "red",
      },
      common: {
        red: "red",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
}
