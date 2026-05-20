import { Theme } from "@emotion/react";
import { Box, IconButton, SxProps, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const neonColor = "#26a34c";

const boxButtonLayoutStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  my: { xs: 5, lg: 10 },
  gap: 4,
};

const buttonStyles: SxProps<Theme> = {
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

const titleStyles: SxProps<Theme> = {
  maxWidth: { xs: 300, lg: "100%" },
  fontSize: { xs: 36, lg: 80 },
  fontWeight: "bolder",
  color: neonColor,
};

export default function Contact() {
	return (
		<Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              pb: 8
            }}
          >
          <Typography sx={titleStyles} variant="h3" >Entre em contato</Typography>
          <Box sx={boxButtonLayoutStyles}>
            <IconButton sx={buttonStyles} href="https://www.linkedin.com/in/joao-lucas-saldanha" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={buttonStyles} href="https://github.com/jlucassaldanha" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton sx={buttonStyles} href="mailto:j.lucassaldanha@gmail.com" target="_blank">
              <EmailIcon />
            </IconButton>
          </Box>
          </Box>
	)
}