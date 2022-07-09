import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiPaper: ComponentsOverrides<Theme>["MuiPaper"] = {
  root: {
    direction: "inherit",
    boxShadow: "none",
    borderRadius: 16,
    position: "relative",
  },
  elevation: ({ theme }) => ({
    boxShadow: "0 2px 2px " + theme.palette.grey[300],
  }),
};
