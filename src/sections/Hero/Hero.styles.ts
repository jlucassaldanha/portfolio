import { neonColor } from "@/styles/shared.styles";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const mainHeroBoxStyles: SxProps<Theme> = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }

export const responsiveNeonStyles: SxProps<Theme> = {
  width: { xs: 120, lg: 350 },
  height: { xs: 120, lg: 350 },
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
};

export const boxBodyLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: 5, lg: 8 },
};

export const boxTitleLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  minWidth: { sx: "100vw", lg: "50vw" },
  px: 3,
  py: 2,
  maxWidth: { sx: 300 },
  gap: { xs: 2, lg: 8 },
};

export const boxContentLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: { xs: 300, lg: 450 },
  mt: { lg: 15 },
  gap: 1,
};