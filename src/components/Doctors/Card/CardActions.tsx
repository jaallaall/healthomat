import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { ListItemButton } from "@mui/material";
import MuiCardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { Fragment, useState } from "react";
import DialogMap from "./DialogMap";

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
        <Typography>
          <PinDropIcon color="secondary" /> {t("address")}
        </Typography>
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
          }}
        >
          <ExpandMoreIcon /> +{address.length}
        </ExpandMore>
      </MuiCardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {address.map((item, i) => {
          return (
            <Fragment key={i}>
              <ListItemButton onClick={() => handleClickOpen(item)}>
                {item}
              </ListItemButton>
              {arr.includes(item) && (
                <DialogMap title={item} open={open} setOpen={setOpen} />
              )}
            </Fragment>
          );
        })}
      </Collapse>
    </>
  );
};

export default CardActions;
