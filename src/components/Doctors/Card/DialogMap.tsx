import { DialogTitle } from "@mui";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

interface Props {
  open: boolean;
  setOpen: (e: any) => void;
  title: string;
}

export default function DialogMap({ open, setOpen, title }: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>نقشه</Typography>
      </DialogContent>
    </Dialog>
  );
}
