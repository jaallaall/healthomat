import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiTypography: ComponentsOverrides<Theme>["MuiTypography"] = {
  // h4: ({ theme }) => ({
  //   fontSize: "1.5rem",
  //   fontWeight: 500,
  //   color: theme.palette.text.secondary,
  // }),
  // h5: ({ theme }) => ({
  //   fontSize: "1.25rem",
  //   fontWeight: 500,
  //   color: theme.palette.text.secondary,
  // }),
  // h6: ({ theme }) => ({
  //   fontSize: ".875rem",
  //   fontWeight: 500,
  //   color: theme.palette.text.secondary,
  // }),
  caption: ({ theme }) => ({
    color: theme.palette.grey["500"],
  }),
  body1: ({ theme }) => ({
    color: theme.palette.grey["500"],
  }),
  root: {
    textDecoration: "none",
    fontSize: 14,
  },
};
