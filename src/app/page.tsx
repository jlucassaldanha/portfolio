import { Box, GlobalStyles } from "@mui/material";
import Section from "../components/Section/Section";
import Hero from "@/sections/Hero/Hero";
import NavBar, { NavLinkInfo } from "@/components/NavBar/NavBar";
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import Projects from "@/sections/Projects/Projects";
import { ProjectCardProps } from "@/components/ProjectCard/ProjectCard";

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
    linkGitHub: "https://github.com/jlucassaldanha/controle-ponto",
    linkDeploy: "https://controleponto.vercel.app",
  },
  {
    name: "Spectra Live",
    about: "Aplicação de monitoramento do chat da Twitch com React e Python",
    linkGitHub: "https://github.com/jlucassaldanha/spectra-live",
    linkDeploy: "https://spectralive.vercel.app",
  },
  {
    name: "BankBills",
    about: "API Rest para analise de gastos com C# .NET",
    linkGitHub: "https://github.com/jlucassaldanha/BankBills",
  },
];

// Adicionar tooltips

export default function Home() {
  return (
    <Box>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <NavBar links={NAV_LINKS} />
      <Box component="main">
        <Section id="inicio">
          <Hero />
        </Section>
        <Section id="sobre">
          <About />
        </Section>
        <Section id="projetos">
          <Projects projects={PROJECTS} />
        </Section>
        <Section id="contato">
          <Contact />
        </Section>
      </Box>
    </Box>
  );
}
