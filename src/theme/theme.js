"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#666CFF" },
    secondary: { main: "#e91e63" },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#7f8c8d",
    },
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    fontSize: 14,
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 500 },
  },

  shape: { borderRadius: 12 },

  components: {
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       // //   borderRadius: "12px",
    //       boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
    //       padding: "8px",
    //       border: "1px solid #4c4e641f",
    //       borderRadius: "10px",
    //     },
    //   },
    // },
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
          // backgroundColor: "#f0f2f8",
          // borderBottom: "1px solid #e0e0e0",
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
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       width: "100%",
    //       backgroundColor: "#fff",
    //       minWidth: "100%",
    //     },
    //   },
    //   defaultProps: {
    //     variant: "outlined",
    //     size: "small",
    //   },
    // },
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
