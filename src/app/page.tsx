import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  GlobalStyles,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import Section from "../Components/Section";
import Hero from "@/Sections/Hero";
import NavBar from "@/Components/NavBar";
import { Theme } from "@emotion/react";
import About from "@/Sections/About";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Contact from "@/Sections/Contact";

const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

const neonColor = "#26a34c";

const cardStyles: SxProps<Theme> = {
  backgroundColor: "#141414",
  color: "whitesmoke",
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

const cardImageStyles: SxProps<Theme> = {
  width: { xs: 250, lg: 400 },
  height: { xs: 200, lg: 400 },
};

export default function Home() {
  return (
    <Box>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <NavBar links={NAV_LINKS} />
      <Box component="main">
        <Section id="inicio" bgColor="#141414">
          <Hero />
        </Section>
        <Section id="sobre" bgColor="#141414">
          <About />
        </Section>
        <Section id="projetos" bgColor="#141414">
          <Card sx={cardStyles}>
            <CardHeader 
              title="Nome do Projeto" 
              action={<IconButton><ExpandMoreIcon sx={{color: "whitesmoke"}} /></IconButton>}  
            />
             <CardMedia 
                sx={cardImageStyles}
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
            </CardContent>
          </Card>
        </Section>
        <Section id="contato" bgColor="#141414">
          <Contact />
        </Section>
      </Box>
    </Box>
  );
}
