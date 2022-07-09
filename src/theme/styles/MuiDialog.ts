import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiDialog: ComponentsOverrides<Theme>["MuiDialog"] = {
  paper: ({ theme }) => ({
    width: "100%",
    overflowY: "inherit",
    margin: 16,
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
    [theme.breakpoints.up("xs")]: {
      padding: 0,
    },
  }),
  root: {
    "& .MuiBox-root": {
      paddingTop: 0,
    },
  },
};
