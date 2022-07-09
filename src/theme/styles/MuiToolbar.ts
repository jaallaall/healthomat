import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiToolbar: ComponentsOverrides<Theme>["MuiToolbar"] = {
  root: ({ theme }) => ({
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    boxShadow: "0 2px 2px " + theme.palette.grey[300],
    [theme.breakpoints.up("xs")]: {
      minHeight: "auto",
      paddingLeft: 0,
      paddingRight: 0,
    },
  }),
};
