import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { boxButtonLayoutStyles, buttonStyles } from "@/styles/shared.styles";
import { contactSectionStyles, titleStyles } from "./Contact.styles";

export default function Contact() {
  return (
    <Box sx={contactSectionStyles}>
      <Typography sx={titleStyles} variant="h3">
        Entre em contato
      </Typography>
      <Box sx={boxButtonLayoutStyles}>
        <IconButton
          sx={buttonStyles}
          href="https://www.linkedin.com/in/joao-lucas-saldanha"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={buttonStyles}
          href="https://github.com/jlucassaldanha"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={buttonStyles}
          href="mailto:j.lucassaldanha@gmail.com"
          target="_blank"
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
