import { ColorModeContext } from "context";
import { ToggleDrawerContext } from "context/Drawer";
import { useContext } from "react";

export function useSelector() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useSelector must be used within a Provider");
  }
  return context;
}
export function useToggleDrawer() {
  const context = useContext(ToggleDrawerContext);
  if (!context) {
    throw new Error("useToggleDrawer must be used within a Provider");
  }
  return context;
}
