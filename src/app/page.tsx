
import { Box, GlobalStyles, } from "@mui/material";
import Section from "../Components/Section";
import Hero from "@/Sections/Hero";
import NavBar from "@/Components/NavBar";

const NAV_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];

export default function Home() {
  return (
    <Box>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <NavBar links={NAV_LINKS}/>
      <Box component="main">
        <Section id="inicio" bgColor="#141414">
          <Hero />
        </Section>
        <Section id="sobre" bgColor="#141414">
          A
        </Section>
        <Section id="projetos" bgColor="#141414">
          B
        </Section>
        <Section id="contato" bgColor="#141414">
          C
        </Section>
      </Box>
    </Box>
  );
}
