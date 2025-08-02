"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2", // blue
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0", // purple
      contrastText: "#fff",
    },
    info: {
      main: "#ffc107", // amber (for "Warm")
      contrastText: "#000", // good contrast on yellow
    },
    warning: {
      main: "#ff5722", // deep orange (for "Hot")
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50", // green
      contrastText: "#fff",
    },
    error: {
      main: "#f44336", // red
      contrastText: "#fff",
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    fontSize: 14,
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #d3d7e4",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(76, 78, 100, 0.08)",
          padding: "12px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 28px rgba(76, 78, 100, 0.1)",
            borderColor: "#b0b5c3",
          },
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "8px 12px",
        },
        title: {
          fontSize: "1rem",
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          backgroundColor: "#fff",
        },
      },
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          width: "100%",
          minWidth: "100%",
          backgroundColor: "#fff",
        },
      },
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

export default theme;
