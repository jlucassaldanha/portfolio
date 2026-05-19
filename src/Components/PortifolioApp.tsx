import React from 'react';
import { Box, GlobalStyles } from '@mui/material';
import NavBar from './NavBar';
import  Section  from './Section';

export const PortfolioApp: React.FC = () => {
  return (
    <Box>
      {/* Injeta a rolagem suave no HTML de forma nativa e global */}
      <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />
      
      <NavBar />
      
      <Box component="main">
        <Section id="inicio"  bgColor="#121212">
          {/* Aqui você pode incluir o seu ResponsiveNeonAvatar */}
		  a
        </Section>
        
        <Section id="projetos"  bgColor="#1e1e1e">
          {/* Lista de projetos */}
		  b
        </Section>
        
        <Section id="contato"  bgColor="#121212">
          {/* Formulário ou links */}
		  c
        </Section>
      </Box>
    </Box>
  );
};