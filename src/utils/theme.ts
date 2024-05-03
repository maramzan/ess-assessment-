import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EBAD1E",
      light: "#F7D2C4",
      dark: "#C67F1A",
    },
    text: {
      primary: "#000000",
      secondary: "#212121",
    },
    secondary: {
      main: "#0F1337",
      light: "#45677A",
      dark: "#030F33",
    },
    error: {
      main: "#FF0000",
      light: "#FFC080",
      dark: "#B30000",
    },
    warning: {
      main: "#FFFF00",
      light: "#FFFFCC",
      dark: "#CCCC00",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default theme;
