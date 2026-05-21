import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard/ProjectCard";
import { buttonStyles } from "@/styles/shared.styles";
import { Box, Button } from "@mui/material";
import { boxButtonLayoutStyles, mainProjectsBoxStyles } from "./Projects.styles";

interface ProjectsProps {
  projects: ProjectCardProps[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Box
      sx={mainProjectsBoxStyles}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          name={project.name}
          about={project.about}
          linkGitHub={project.linkGitHub}
          linkDeploy={project.linkDeploy}
        />
      ))}
      <Box sx={boxButtonLayoutStyles}>
        <Button
          sx={buttonStyles}
          variant="contained"
          href="https://github.com/jlucassaldanha"
          target="_blank"
        >
          Descobrir mais projetos
        </Button>
      </Box>
    </Box>
  );
}
