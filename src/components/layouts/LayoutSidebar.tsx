import { heightHeader } from "@mui";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import List from "./List";

interface Props {
  children: React.ReactNode;
}

const LayoutSidebar: React.FC<Props> = ({ children }): React.ReactElement => {
  const { t } = useTranslation();
  const matches = useMediaQuery("(min-width:600px)");

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Stack sx={{ py: 4 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Button
              onClick={toggleDrawer("left", true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              variant={matches ? "permanent" : "temporary"}
              sx={{
                "& .MuiDrawer-paperAnchorDockedLeft": {
                  position: "static",
                  borderRadius: 4,
                },
              }}
            >
              <Paper
                sx={{
                  width: { xs: 250, md: "auto" },
                  p: 3,
                  borderRadius: { md: 3 },
                  minHeight: { md: `calc(100vh - ${heightHeader - 20}px)` },
                }}
                role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer("left", false)}
              >
                <Typography variant="h6" mb={1}>
                  {t("filters")}
                </Typography>
                <Divider />
                <List />
              </Paper>
            </Drawer>
          </Grid>
          <Grid item md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default LayoutSidebar;
