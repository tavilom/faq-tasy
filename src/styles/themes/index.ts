import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003366' // original #008c50
    },
    secondary: {
      main: '#efefef'
    },
    info: {
      main: '#ffffff',
      dark: '#efefef',
      contrastText: '#003366'
    }
  },
  custom: {
    bgGradient: "linear-gradient(to right, #000000, #003366)"
  }
});
