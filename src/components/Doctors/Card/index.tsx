import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import MedicationIcon from "@mui/icons-material/Medication";
import { Rating } from "@mui/material";
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
import SocialNetwork from "./SocialNetwork";

interface Props {
  data: Options;
}

export default function RecipeReviewCard({ data }: Props) {
  const { t } = useTranslation();

  return (
    <Card key={data.id}>
      <CardHeader data={data} />
      <CardMedia
        component="div"
        sx={{ height: 120, position: "relative", mt: -6 }}
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
          py: 0,
        }}
      >
        <Typography mb={1} textAlign="center">
          <FileDownloadDoneIcon color="success" />
          {data.name}
        </Typography>
        <Typography mb={1} textAlign="center">
          <MedicationIcon color="primary" />
          {data.specialty}
        </Typography>
        <Typography
          sx={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: ({ palette }) => palette.grey[200],
            py: 1,
          }}
        >
          {t("codeDr")}: {data.code}
        </Typography>
      </CardContent>

      <CardActions address={data.address} />
      <MuiCardActions disableSpacing>
        <SocialNetwork />
        <Rating
          name="read-only"
          value={data.rate}
          readOnly
          size="small"
          sx={{ mr: 0, ml: "auto" }}
        />
      </MuiCardActions>
    </Card>
  );
}
