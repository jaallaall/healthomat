import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { TKey } from "interfaces";
import { useTranslation } from "next-i18next";
import { useState } from "react";

interface Props {
  menu: string[];
}

const MenuXs: React.FC<Props> = ({ menu }): React.ReactElement => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
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
          display: { xs: "block", md: "none" },
          px: 3,
        }}
      >
        {menu.map((item: string) => (
          <MenuItem key={item} onClick={handleCloseNavMenu} sx={{ py: 0 }}>
            <Button color="inherit">{t(item as TKey)}</Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuXs;
