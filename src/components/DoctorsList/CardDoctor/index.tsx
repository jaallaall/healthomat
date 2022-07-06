import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import MedicationIcon from "@mui/icons-material/Medication";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
} from "@mui/material";
import Card from "@mui/material/Card";
import MuiCardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Options } from "interfaces";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import CardActions from "./CardActions";
import CardHeader from "./CardHeader";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ListDropdown from "./ListDropdown";

interface Props {
  data: Options;
}

const CardDoctor: React.FC<Props> = ({ data }): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Card
      key={data.id}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& + &.MuiPaper-root": {
          mt: 2,
        },
      }}
    >
      <Box sx={{ flex: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            justifyContent: { md: "flex-start", xs: "center" },
          }}
        >
          <CardMedia
            component="div"
            sx={{ height: 120, width: 120, position: "relative" }}
          >
            <Image
              src="/static/images/doctor.webp"
              alt="Paella dish"
              objectFit="scale-down"
              layout="fill"
            />
          </CardMedia>
          <CardContent
            sx={{
              flex: "auto",
              p: 1,
            }}
          >
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon>
                <FileDownloadDoneIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon>
                <MedicationIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={data.specialty} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText primary={t("codeDr") + " : " + data.code} />
            </ListItem>
          </CardContent>

          <MuiCardActions
            disableSpacing
            sx={{ flexDirection: "column", alignItems: { md: "flex-end" } }}
          >
            <ListDropdown />
            <Box
              sx={{
                display: "flex",
                mt: 2,
              }}
            >
              <Rating
                name="read-only"
                value={data.rate}
                readOnly
                size="small"
                sx={{ mr: 2, ml: "auto" }}
              />
              <Typography component="span" sx={{ display: "block", mr: 1 }}>
                <RemoveRedEyeIcon fontSize="small" /> {data.view}k
              </Typography>
              <Typography component="span" sx={{ display: "block" }}>
                <PersonIcon fontSize="small" /> {data.visit}
              </Typography>
            </Box>
          </MuiCardActions>
        </Box>
        <CardActions address={data.address} />
      </Box>
      <CardHeader data={data} />
    </Card>
  );
};

export default CardDoctor;
