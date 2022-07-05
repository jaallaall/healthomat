import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShareIcon from "@mui/icons-material/Share";
import MuiCardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Options } from "interfaces";

interface Props {
  data: Options;
}

const CardHeader: React.FC<Props> = ({ data }): React.ReactElement => {
  return (
    <MuiCardHeader
      sx={{ zIndex: 9, position: "relative" }}
      action={
        <>
          <IconButton aria-label="Share" color="primary">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Bookmark" color="primary">
            <BookmarkIcon />
          </IconButton>
        </>
      }
      subheader={
        <>
          <Typography component="span" sx={{ display: "block" }}>
            <RemoveRedEyeIcon fontSize="small" /> {data.view}k
          </Typography>
          <Typography component="span" sx={{ display: "block" }}>
            <PersonIcon fontSize="small" /> {data.visit}
          </Typography>
        </>
      }
    />
  );
};

export default CardHeader;
