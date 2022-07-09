import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  expanded: boolean;
}

const Accordion: React.FC<Props> = ({
  title,
  children,
  expanded,
}): React.ReactElement => {
  const [open, setOpen] = useState(expanded);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          px: 0,
          "&.MuiListItemButton-root:not(&:first-of-type)": {
            borderTop: ({ palette }) => "1px solid " + palette.grey[100],
          },
        }}
      >
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};

export default Accordion;
