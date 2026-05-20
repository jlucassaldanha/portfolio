import ProjectCard, { ProjectCardProps } from "@/Components/ProjectCard";
import { Theme } from "@emotion/react";
import { Box, Button, SxProps } from "@mui/material";

const neonColor = "#26a34c";

const boxButtonLayoutStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  my: 3
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

interface ProjectsProps {
	projects: ProjectCardProps[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Box sx={{ px: 2, py: 4, display: "flex", flexDirection: "column", gap: 3 }}>
      {projects.map((project, i) => (
		<ProjectCard 
			key={i}
			name={project.name}
			about={project.about}
			href={project.href}
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
