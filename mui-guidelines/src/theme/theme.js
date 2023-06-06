import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
    },
    border: "#000000",
  },
  components: {
    // style overrides for the textfield

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000",
          },
        },
        notchedOutline: {
          borderColor: "#000800",
          borderRadius: "4px",
        },
      },
    },
    // style overrides for the textfield's label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&.Mui-focused": {
            color: "#000000",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          backgroundColor: "transparent",
          fontSize: "16px",
          textTransform: "none",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
        primary: {
          backgroundColor: "#2988DF",
          color: "#FFFFFF",
          border: "1px solid #2988DF",
          fontWeight: 500,
          padding: "10px 32px",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #2988DF",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
          },
          ":focus": {
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #2988DF",
          },
          ":disabled": {
            backgroundColor: "#F2F5FA",
            opacity: 0.5,
            fontWeight: 500,
            color: "#BEC2C4",
            border: "none",
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#ffffff",
          border: "1px solid #ffffff",
          fontWeight: 500,
          padding: "10px 32px",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #ffffff",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
          },
          ":focus": {
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #ffffff",
          },
          ":disabled": {
            backgroundColor: "#ffffff",
            opacity: 0.5,
            fontWeight: 500,
            color: "#1b2126",
            boxShadow: "none",
          },
        },
        outlined: {
          border: "1px solid #1B2126",
          padding: "10px 32px",

          ":hover": {
            border: "1px solid #1B2126",
            backgroundColor: "#F2F5FA",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
            transition: "all .2s linear",
          },
          ":focus": {
            background: "#E5E6EA",
          },
          ":disabled": {
            boxShadow: "none",
          },
        },
        link: {
          color: "#000000",
          width: "fit-content",
          fontSize: "12px",
          padding: "10px 16px",
          textTransform: "initial",

          ":hover": {
            background: "transparent",
          },
          ":focus": {
            background: "transparent",
          },
        },
        danger: {
          color: "#FFFFFF",
          backgroundColor: "#d94a41",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #D94A41",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08);",
          },
          ":focus": {
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #D94A41",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          margin: "30px 0",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
    },
    border: "#ffffff",
  },
  components: {
    // style overrides for the checkbox's label
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    // style overrides for the textfield
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#ffffff",
          borderRadius: "4px",
        },
      },
    },
    // style overrides for the textfield's label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    // style overrides for all variants of mui Button component
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          backgroundColor: "transparent",
          fontSize: "16px",
          textTransform: "none",
          ":hover": {
            backgroundColor: "transparent",
          },
        },
        primary: {
          backgroundColor: "#2988DF",
          color: "#FFFFFF",
          border: "1px solid #2988DF",
          fontWeight: 500,
          padding: "10px 32px",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #2988DF",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
          },
          ":focus": {
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #2988DF",
          },
          ":disabled": {
            backgroundColor: "#F2F5FA",
            opacity: 0.5,
            fontWeight: 500,
            color: "#BEC2C4",
            border: "none",
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#000000",
          border: "1px solid #ffffff",
          fontWeight: 500,
          padding: "10px 32px",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #000000",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
          },
          ":focus": {
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #000000",
          },
          ":disabled": {
            backgroundColor: "#000000",
            opacity: 0.5,
            fontWeight: 500,
            color: "#1b2126",
            boxShadow: "none",
          },
        },
        outlined: {
          border: "1px solid #1B2126",
          padding: "10px 32px",

          ":hover": {
            border: "1px solid #1B2126",
            backgroundColor: "#F2F5FA",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08)",
            transition: "all .2s linear",
          },
          ":focus": {
            background: "#E5E6EA",
          },
          ":disabled": {
            boxShadow: "none",
          },
        },
        link: {
          color: "#ffffff",
          width: "fit-content",
          fontSize: "12px",
          padding: "10px 16px",
          textTransform: "initial",

          ":hover": {
            background: "transparent",
          },
          ":focus": {
            background: "transparent",
          },
        },
        danger: {
          color: "#FFFFFF",
          backgroundColor: "#d94a41",
          ":hover": {
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #D94A41",
            boxShadow: "0px 4px 18px 2px rgba(37, 37, 37, 0.08);",
          },
          ":focus": {
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #D94A41",
          },
        },
        info: {
          color: "#2988df",
          fontSize: "14px",
          padding: 0,
          minWidth: 0,

          ":hover": {
            color: "#2988DF",
          },
          ":focus": {
            color: "#006CCE",
          },
          ":disabled": {
            color: "#BEC2C4",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          margin: "30px 0",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

export { lightTheme, darkTheme };
