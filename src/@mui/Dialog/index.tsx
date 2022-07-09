import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const DialogTitle: React.FC<{
  id: string;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ children, onClose, ...other }): React.ReactElement => {
  return (
    <MuiDialogTitle
      sx={{
        m: 0,
        p: 2,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
