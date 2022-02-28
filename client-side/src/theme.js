import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h2: {
      // Default 3.75 rem
      fontSize: "3rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
  },
  palette: {
    primary: {
      light: "#14b82a",
      main: "#119822",
      dark: "#0d731a",
    },
    secondary: {
      light: "#404040",
      main: "#2F2F2F",
      dark: "#1a1a1a",
    },
    neutral: {
      light: "#f2f1f4",
      main: "#DED9E2",
      dark: "#cdc5d3",
    },
  },
});

export default theme;
