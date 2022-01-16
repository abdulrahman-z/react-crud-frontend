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
      error: {
        main: "#F12B2C",
      },
      success: {
        main: "#29CC97",
      },
      warning: {
        main: "#FEC400",
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
