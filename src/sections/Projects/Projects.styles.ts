import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const boxButtonLayoutStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  my: 3,
};

export const mainProjectsBoxStyles: SxProps<Theme> = {
  px: 2,
  py: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};
