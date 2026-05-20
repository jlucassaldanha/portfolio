import { Theme } from "@emotion/react";
import {
  Card,
  CardContent,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const neonColor = "#26a34c";

const cardStyles: SxProps<Theme> = {
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
  py: 1
};

const textStyles: SxProps<Theme> = {
  fontSize: { xs: 12, lg: 20 },
};

const titleStyles: SxProps<Theme> = {
  color: neonColor,
  pb: 2
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

export interface ProjectCardProps {
  name: string, 
  about: string, 
  linkGitHub?: string
  linkDeploy?: string
}

export default function ProjectCard({ name, about, linkGitHub, linkDeploy }: ProjectCardProps) {
  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography variant="h5" sx={titleStyles}>
          {name}
        </Typography>
        <Typography variant="body2" sx={textStyles}>
          {about}
        </Typography>
      </CardContent>
      <CardContent sx={{display: "flex", flexDirection: "column", gap: 1}}>
        {linkDeploy && (
          <IconButton sx={buttonStyles} href={linkDeploy} target="_blank">
            <ArrowForwardIcon />
          </IconButton>
        )}
        {linkGitHub && (
          <IconButton sx={buttonStyles} href={linkGitHub} target="_blank">
            <GitHubIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}
