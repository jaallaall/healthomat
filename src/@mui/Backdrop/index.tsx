import Portal from "@mui/base/Portal";
import { SxProps } from "@mui/material";
import MuiBackdrop from "@mui/material/Backdrop";
import { memo, useEffect, useRef } from "react";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
  sx?: SxProps;
}

const Backdrop: React.FC<Props> = memo(
  ({ open, setOpen, sx }): React.ReactElement | null => {
    const container = useRef(null);
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.removeAttribute("style");
      }
    });
    return open ? (
      <Portal container={container.current}>
        <MuiBackdrop
          sx={{ color: "#fff", zIndex: 1090, ...sx }}
          open={open}
          onClick={() => setOpen(false)}
        />
      </Portal>
    ) : null;
  }
);

export default Backdrop;
