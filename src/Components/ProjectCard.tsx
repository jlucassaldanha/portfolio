import { Theme } from "@emotion/react";
import {
  Card,
  CardContent,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

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

export interface ProjectCardProps {
  name: string, 
  about: string, 
  href: string
}

export default function ProjectCard({ name, about, href }: ProjectCardProps) {
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
      <CardContent>
        <IconButton sx={{color: "whitesmoke"}} href={href} target="_blank">
          <GitHubIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
