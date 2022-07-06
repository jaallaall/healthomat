import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import MuiCardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Options } from "interfaces";

interface Props {
  data: Options;
}

const CardHeader: React.FC<Props> = ({ data }): React.ReactElement => {
  return (
    <MuiCardHeader
      sx={{
        zIndex: 9,
        position: "relative",
        p: 1,
        order: { md: "unset", xs: -1 },
        ml: "auto",
      }}
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
    />
  );
};

export default CardHeader;
