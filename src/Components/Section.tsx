import React from 'react';
import { Box } from '@mui/material';

interface SectionProps {
  id: string;
  bgColor: string;
  children: React.ReactNode;
}

export default function Section({ id, bgColor, children }: SectionProps) {
  return (
    <Box
      id={id} 
      component="section"
      sx={{
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        scrollMarginTop: '64px', 
      }}
    >
      {children}
    </Box>
  );
};