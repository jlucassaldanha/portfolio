import { neonColor } from "@/styles/shared.styles";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const titleStyles: SxProps<Theme> = {
  maxWidth: { xs: 300, lg: "100%" },
  fontSize: { xs: 36, lg: 80 },
  fontWeight: "bolder",
  color: neonColor,
};

export const contactSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  pb: 8,
};