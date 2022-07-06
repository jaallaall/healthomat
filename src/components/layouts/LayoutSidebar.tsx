import { heightHeader, Sidebar } from "@mui";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useToggleDrawer } from "hooks";
import { Pages } from "interfaces";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import List from "./List";

interface Props {
  children: React.ReactNode;
}

const LayoutSidebar: React.FC<Props> = ({ children }): React.ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const { toggleDrawer } = useToggleDrawer();

  const sidebar = (
    <Sidebar heightHeader={heightHeader}>
      <Typography variant="h6" mb={1}>
        {t("filters")}
      </Typography>
      <Divider />
      <List />
    </Sidebar>
  );

  return (
    <Stack sx={{ py: 4 }}>
      <Container>
        {pathname !== Pages.DoctorsList ? (
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Button
                onClick={toggleDrawer("left", true)}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </Button>
              {sidebar}
            </Grid>
            <Grid item md={9}>
              {children}
            </Grid>
          </Grid>
        ) : (
          <>
            {sidebar}
            {children}
          </>
        )}
      </Container>
    </Stack>
  );
};

export default LayoutSidebar;
