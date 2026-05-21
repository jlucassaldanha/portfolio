import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const textStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: { lg: "50%" } ,
  fontSize: { xs: 18, lg: 25 },
};

export const boxContentLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row"},
  justifyContent: "center",
  alignItems: "start",
  maxWidth: { xs: 500, lg: 10000 },
  gap: 6
};

export const boxBodyLayoutStyles: SxProps<Theme> = {
  display: "flex",
  pb: 15,
  px: { xs: 5, lg: 10 },
  flexDirection:  "column",
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: 5, lg: 8 },
};