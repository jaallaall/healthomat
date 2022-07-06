import { Drawer, Paper, useMediaQuery } from "@mui/material";
import { useToggleDrawer } from "hooks";
import { Pages } from "interfaces";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  heightHeader: number;
}

export const Sidebar: React.FC<Props> = ({
  children,
  heightHeader,
}): React.ReactElement => {
  const { pathname } = useRouter();
  const matches = useMediaQuery("(min-width:600px)");
  const { state, toggleDrawer } = useToggleDrawer();
  const path = pathname !== Pages.DoctorsList;
  return (
    <Drawer
      anchor={"left"}
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      variant={matches && path ? "permanent" : "temporary"}
      sx={{
        "& .MuiDrawer-paperAnchorDockedLeft": {
          position: "static",
          borderRadius: 4,
        },
      }}
    >
      <Paper
        sx={{
          width: { xs: 270, md: !path ? 320 : "auto" },
          p: 3,
          borderRadius: { md: 3 },
          minHeight: { md: `calc(100vh - ${heightHeader - 20}px)` },
          boxShadow: "none",
        }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer("left", false)}
      >
        {children}
      </Paper>
    </Drawer>
  );
};
