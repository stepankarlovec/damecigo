import { ThemeOptions } from "@mui/material/styles";
import { FC, forwardRef } from "react";
import NextLink from "next/link";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#403F42",
          ":hover": {
            color: "#ce0022",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ce0022",
          ":hover": {
            boxShadow: 0,
            color: "#ce0022",
            backgroundColor: "#E7ECEF",
          },
        },
        outlined: {
          border: "1px solid #ce0022",
          color: "#ce0022",
          backgroundColor: "white",
          ":hover": {
            boxShadow: 0,
            color: "black",
            backgroundColor: "#E7ECEF",
            border: "1px solid #ce0022",
          },
        },
      },
    },
  },
};

export default lightThemeOptions;
