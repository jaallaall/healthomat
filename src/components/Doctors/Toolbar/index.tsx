import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Pages, TKey } from "interfaces";
import { useTranslation } from "next-i18next";
import MenuXs from "./MenuXs";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggleDrawer } from "hooks";
import { useRouter } from "next/router";

export const menu = [
  "most visited",
  "Medical system code",
  "first turn",
  "The highest score",
];

const ToolbarCustom: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const { toggleDrawer } = useToggleDrawer();

  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        bgcolor: "background.paper",
        alignItems: "center",
        borderRadius: 3,
        p: { xs: 1 },
        mb: 2,
        overflow: "hidden",
      }}
    >
      {pathname === Pages.DoctorsList && (
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
      )}

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("doctor")}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <MenuXs menu={menu} />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: { md: "center" },
          whiteSpace: { md: "nowrap" },
          ml: 2,
          fontSize: 12,
          flex: "auto",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="overline">{t("sort by")} :</Typography>
        {menu.map((item) => (
          <Button
            key={item}
            sx={{ display: "block", fontSize: "inherit" }}
            color="inherit"
          >
            {t(item as TKey)}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default ToolbarCustom;
