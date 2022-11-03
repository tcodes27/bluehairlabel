import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#eae7e6",
    200: "#d6cfcc",
    300: "#c1b7b3",
    400: "#ad9f99",
    500: "#988780",
    600: "#7a6c66",
    700: "#5b514d",
    800: "#3d3633",
    900: "#1e1b1a",
  },

  secondary: {
    100: "#d0d4d4",
    200: "#a1a9aa",
    300: "#717f7f",
    400: "#425455",
    500: "#13292a",
    600: "#0f2122",
    700: "#0b1919",
    800: "#081011",
    900: "#040808",
  },

  neutral: {
    100: "#faf8f7",
    200: "#f5f2f0",
    300: "#f1ebe8",
    400: "#ece5e1",
    500: "#e7ded9",
    600: "#b9b2ae",
    700: "#8b8582",
    800: "#5c5957",
    900: "#2e2c2b",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
