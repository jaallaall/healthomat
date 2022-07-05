import { PaletteOptions } from "@mui/material";
import { enUS, faIR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { styles } from "./styles";

export const customTheme = (palette?: PaletteOptions, locale?: string) => {
  const loc = locale === "fa" ? faIR : enUS;
  const dir = locale === "fa" ? "rtl" : "ltr";
  return createTheme(
    {
      direction: dir,
      typography: {
        htmlFontSize: 16,
        fontSize: 14,
        ...(locale === "fa" && {
          fontFamily: "dana",
        }),
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: styles(locale as string),
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              "&.MuiContainer-maxWidthSm": {
                maxWidth: 900,
              },
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
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
          },
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              verticalAlign: "text-bottom",
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              direction: "inherit",
              boxShadow: "none",
              borderRadius: 16,
              position: "relative",
            },
            elevation: ({ theme }) => ({
              boxShadow: "0 2px 2px " + theme.palette.grey[300],
            }),
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: "#fff",
            },
          },
        },
        MuiAlert: {
          styleOverrides: {
            filledSuccess: ({ theme }) => ({
              backgroundColor: theme.palette.info.main,
            }),
          },
        },
        MuiAccordion: {
          styleOverrides: {
            root: {
              boxShadow: "none",
              "&.Mui-expanded": {
                "&:before": {
                  opacity: 1,
                },
              },
            },
          },
        },
        MuiAccordionSummary: {
          styleOverrides: {
            root: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
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
          },
        },
        // MuiDivider: {
        //   styleOverrides: {
        //     root: ({ theme }) => ({
        //       borderColor: theme.palette.grey[200],
        //     }),
        //   },
        // },
        MuiAccordionDetails: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: ({ theme }) => ({
              color: theme.palette.grey[300],
            }),
          },
        },
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              minWidth: 30,
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
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
          },
        },
        MuiButton: {
          styleOverrides: {
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
          },
        },
        MuiToolbar: {
          styleOverrides: {
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
          },
        },
        MuiDialog: {
          styleOverrides: {
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
          },
        },
        MuiDialogContent: {
          styleOverrides: {
            root: {
              padding: 16,
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: ({ theme }) => ({
              color: theme.palette.grey[100],
            }),
          },
        },
        MuiGrid: {
          styleOverrides: {
            item: {
              width: "100%",
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              borderRadius: 0,
            },
          },
        },
      },
      palette,
    },
    loc
  );
};
