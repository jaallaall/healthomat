import { Link } from "@mui";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { Box, ListItemButton } from "@mui/material";
import MuiCardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface Props {
  address: string[];
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardActions: React.FC<Props> = ({ address }): React.ReactElement => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [arr, setArr] = useState<string[]>([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClickOpen = (item: string) => {
    const ar = [];
    ar.push(item);
    setArr(ar);
    setOpen(true);
  };
  return (
    <>
      <MuiCardActions disableSpacing>
        <Typography sx={{ flex: "auto" }} variant="overline">
          <PinDropIcon color="secondary" /> {t("address")}
        </Typography>
        <Box>
          <IconButton
            aria-label="phone"
            sx={{
              border: "1px solid",
              borderColor: ({ palette }) => palette.grey[200],
              mr: 1,
              color: "primary.main",
            }}
            size="small"
            component={Link}
            href={"tel:09390157719"}
          >
            <LocalPhoneIcon fontSize="small" />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              border: ({ palette }) => "1px solid " + palette.grey[200],
              borderRadius: 2,
              py: 0,
              fontSize: "inherit",
              transform: "none",
              color: "primary.main",
            }}
          >
            <ExpandMoreIcon sx={{ color: "grey.500" }} /> +{address.length}
          </ExpandMore>
        </Box>
      </MuiCardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {address.map((item, i) => {
          return (
            <ListItemButton key={i} onClick={() => handleClickOpen(item)}>
              {item}
            </ListItemButton>
          );
        })}
      </Collapse>
    </>
  );
};

export default CardActions;
