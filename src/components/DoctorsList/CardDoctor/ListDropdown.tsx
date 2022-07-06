import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { TKey } from "interfaces";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export const menu = [
  "most visited",
  "Medical system code",
  "first turn",
  "The highest score",
];

const ListDropdown: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button color="inherit">{t("most visited")}</Button>
      <Button color="inherit">{t("Medical system code")}</Button>
      <Button
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{
          border: "1px solid",
          borderColor: ({ palette }) => palette.grey[200],
          color: "primary.main",
          py: 0,
          minWidth: "auto",
          height: 28,
        }}
      >
        <small>+ 3</small>
        <ExpandMoreIcon />
      </Button>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          px: 3,
        }}
      >
        {menu.map((item: string) => (
          <MenuItem key={item} onClick={handleCloseNavMenu} sx={{ py: 0 }}>
            <Button color="inherit">{t(item as TKey)}</Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ListDropdown;
