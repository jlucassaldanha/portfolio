import { neonColor } from "@/styles/shared.styles";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const appBarStyles: SxProps<Theme> = {
  backgroundColor: "#141414",
  padding: 0,
  boxShadow: "none",
};

export const toolbarStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  padding: 0,
};

export const getNavButtonStyles = (isActive: boolean): SxProps<Theme> => ({
  padding: 1,
  borderBottom: isActive ? `2px solid ${neonColor}` : "none",
  color: isActive ? neonColor : "white",
});
