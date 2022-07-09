import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiButton: ComponentsOverrides<Theme>["MuiButton"] = {
  textSecondary: ({ theme }) => ({
    "&.Mui-disabled": {
      color: theme.palette.grey[100],
    },
  }),
  outlinedSecondary: ({ theme }) => ({
    "&.Mui-disabled": {
      color: theme.palette.grey[100],
      backgroundColor: theme.palette.grey[300],
      borderColor: theme.palette.grey[300],
    },
  }),
};
