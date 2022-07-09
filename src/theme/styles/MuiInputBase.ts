import { ComponentsOverrides, Theme } from "@mui/material";

export const MuiInputBase: ComponentsOverrides<Theme>["MuiInputBase"] = {
  input: {
    direction: "inherit",
  },
  root: ({ theme }) => ({
    "&.MuiInputBase-colorPrimary:not(.Mui-error)": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&.MuiInputBase-colorSecondary:not(.Mui-error)": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.secondary + "!important",
      },
    },
    "&.MuiInputBase-colorInfo:not(.Mui-error)": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.info.main,
      },
    },
  }),
};
