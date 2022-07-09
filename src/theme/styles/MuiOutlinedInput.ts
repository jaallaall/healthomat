import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiOutlinedInput: ComponentsOverrides<Theme>["MuiOutlinedInput"] =
  {
    root: ({ theme }) => ({
      borderRadius: 6,
      color: theme.palette.text.secondary,
      "& .MuiSvgIcon-root": {
        color: "inherit",
      },
      "& .MuiIconButton-root": {
        color: "inherit",
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.grey["100"] + "!important",
        color: theme.palette.grey["100"] + "!important",
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderWidth: 1,
      borderColor: theme.palette.grey["100"],
    }),
  };
