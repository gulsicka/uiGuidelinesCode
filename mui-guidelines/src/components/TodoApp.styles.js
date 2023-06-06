import { makeStyles } from "@mui/styles";

// makeStyles example with breakpoints
export const useTodoAppStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0",
    width: "100%",
    height: "100vh",
    background: theme?.palette?.background?.default,
  },

  listRoot: {
    border: `2px solid ${theme?.palette?.border}`,
    borderRadius: "4px",
    minHeight: "300px",
    maxHeight: "300px",
    overflowY: "auto",
    // example of breakpoints demonstrated below
    // for screens with width between 0px-768px, the below styling would be applied
    [theme?.breakpoints.up("xs")]: {
      width: "300px",
    },
    // for screens with width between 768px-1024px, the below styling would be applied
    [theme?.breakpoints.up("sm")]: {
      width: "500px",
    },
    // for screens with width 1024px and above, the below styling would be applied
    [theme?.breakpoints.up("md")]: {
      width: "800px",
    },
  },

  listItemRoot: {
    borderBottom: `1px solid ${theme?.palette.border}`,
    color: theme?.palette?.primary.main,
  },
}));
