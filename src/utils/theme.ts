import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#23A6F0",
      light: "#737373",
    },
    secondary: {
      main: "#23856D",
      light: "#2DC071",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
    error: {
      main: "#red",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default theme;
