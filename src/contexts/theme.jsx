import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: [`'Quattrocento Sans'`, "sans-serif"].join(","),
    h1: {
      fontFamily: ["Monoton", "cursive"].join(","),
    },
    h2: {
      fontFamily: ["Days One", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Days One", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Alfa Slab One", "sans-serif"].join(","),
    },
  },
  palette: {
    background: { default: "#A78851", paper: grey[800] },
    primary: { main: "#4A1B1F" },
    secondary: {
      main: "#404C24",
    },
    test1: {
      main: "#A78851",
    },
    text: { primary: "#A78851" },
  },
});

export const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

// #4A1B1F
// #6F2924
// #8C573A
// #A78851
// #404C24
