import {
  Box,
  GlobalStyles,
} from "@mui/material";
import Section from "../Components/Section";
import Hero from "@/Sections/Hero";
import NavBar, { NavLinkInfo } from "@/Components/NavBar";
import About from "@/Sections/About";
import Contact from "@/Sections/Contact";
import Projects from "@/Sections/Projects";
import { ProjectCardProps } from "@/Components/ProjectCard";

const NAV_LINKS: NavLinkInfo[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

const PROJECTS: ProjectCardProps[] = [
  { 
    name: "Controle de Ponto", 
    about: "Aplicação para controle de horas extras costruída em Next.JS",
    href: "https://github.com/jlucassaldanha/controle-ponto"
  },
  { 
    name: "Spectra Live", 
    about: "Aplicação de monitoramento do chat da Twitch com React e Python",
    href: "https://github.com/jlucassaldanha/spectra-live"
  },
  { 
    name: "BankBills", 
    about: "Aplicação para analise de gastos com C# .NET",
    href: "https://github.com/jlucassaldanha/BankBills"
  },
]

export default function Home() {
  return (
    <Box>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <NavBar links={NAV_LINKS} />
      <Box component="main">
        <Section id="inicio" bgColor="#141414">
          <Hero />
        </Section>
        <Section id="sobre" bgColor="#202020">
          <About />
        </Section>
        <Section id="projetos" bgColor="#141414">
          <Projects projects={PROJECTS}/>
        </Section>
        <Section id="contato" bgColor="#202020">
          <Contact />
        </Section>
      </Box>
    </Box>
  );
}
