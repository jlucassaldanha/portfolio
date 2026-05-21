import { SxProps, Theme } from "@mui/material";

export const neonColor = "#26a34c";

export const buttonStyles: SxProps<Theme> = {
  backgroundColor: neonColor,
  borderRadius: 5,
  boxShadow: `
		inset 0 0 1px ${neonColor},
		0 0 2px ${neonColor},
		0 0 4px ${neonColor},
		0 0 8px ${neonColor}
	  `,
  "&:hover": {
	backgroundColor: neonColor,
	boxShadow: `
		inset 0 0 3px ${neonColor},
		0 0 6px ${neonColor},
		0 0 12px ${neonColor},
		0 0 24px ${neonColor}
	  `,
  },
};

export const boxButtonLayoutStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  my: { xs: 5, lg: 10 },
  gap: 4,
};

export const titleStyles: SxProps<Theme> = {
  maxWidth: { xs: 300, lg: 450 },
  fontSize: { xs: 36, lg: 80 },
  fontWeight: "bolder",
  color: neonColor,
};

export const textStyles: SxProps<Theme> = {
  fontSize: { xs: 18, lg: 25 },
};
