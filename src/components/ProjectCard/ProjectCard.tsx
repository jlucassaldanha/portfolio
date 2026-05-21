import {
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { buttonStyles } from "@/styles/shared.styles";
import { cardContentStyles, cardStyles, textStyles, titleStyles } from "./ProjectCard.styles";

export interface ProjectCardProps {
  name: string;
  about: string;
  linkGitHub?: string;
  linkDeploy?: string;
}

export default function ProjectCard({
  name,
  about,
  linkGitHub,
  linkDeploy,
}: ProjectCardProps) {
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
      <CardContent sx={cardContentStyles}>
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
