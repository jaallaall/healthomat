import { PaletteOptions } from "@mui/material";
import { enUS, faIR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { styles } from "./styles/styles";
import { MuiButton } from "./styles/MuiButton";
import { MuiDialog } from "./styles/MuiDialog";
import { MuiInputBase } from "./styles/MuiInputBase";
import { MuiOutlinedInput } from "./styles/MuiOutlinedInput";
import { MuiPaper } from "./styles/MuiPaper";
import { MuiToolbar } from "./styles/MuiToolbar";
import { MuiTypography } from "./styles/MuiTypography";

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
          styleOverrides: MuiTypography,
        },
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              verticalAlign: "text-bottom",
            },
          },
        },
        MuiPaper: {
          styleOverrides: MuiPaper,
        },
        MuiAppBar: {
          styleOverrides: {
            root: ({ theme }) => ({
              backgroundColor: theme.palette.background.paper,
            }),
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
          styleOverrides: MuiOutlinedInput,
        },
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
          styleOverrides: MuiInputBase,
        },
        MuiButton: {
          styleOverrides: MuiButton,
        },
        MuiToolbar: {
          styleOverrides: MuiToolbar,
        },
        MuiDialog: {
          styleOverrides: MuiDialog,
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
        MuiCardHeader: {
          styleOverrides: {
            subheader: {
              color: "inherit",
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
