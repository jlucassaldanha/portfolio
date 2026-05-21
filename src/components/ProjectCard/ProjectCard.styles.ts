import { neonColor } from "@/styles/shared.styles";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  backgroundColor: "#141414",
  color: "whitesmoke",
  borderRadius: 3,
  border: `2px solid ${neonColor}`,
  boxShadow: {
    xs: `
      inset 0 0 3px ${neonColor},
      0 0 6px ${neonColor},
      0 0 12px ${neonColor},
      0 0 24px ${neonColor}
    `,
    md: `
      inset 0 0 5px ${neonColor},
      0 0 10px ${neonColor},
      0 0 20px ${neonColor},
      0 0 40px ${neonColor}
    `,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: 120,
  py: 1,
};

export const textStyles: SxProps<Theme> = {
  fontSize: { xs: 12, lg: 20 },
};

export const titleStyles: SxProps<Theme> = {
  color: neonColor,
  pb: 2,
};

export const cardContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};