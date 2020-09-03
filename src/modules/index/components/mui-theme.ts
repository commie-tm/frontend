import { createMuiTheme } from '@material-ui/core';

export function getTheme(mode: "light"|"dark" = "light") {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: "#2CC84D"
      },
      secondary: {
        main: "#3D4A51"
      },
      background: {
        default: mode === "light" ? "#DFDFDF" : "#151515",
        paper: mode === "light" ? "#f9faff" : "#3D4048"
      }
    },
    typography: {
      fontFamily: "'Work Sans', Inter, Arial, sans-serif",
      fontWeightBold: 900,
      fontWeightMedium: 500,
      fontWeightRegular: 500,
      fontSize: 15,
      h4: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 5
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': {
          },
        },
      },
      MuiButton: {
        label: {
          fontSize: '.9rem'
        }
      }
    },
  });
}