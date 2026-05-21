import React from "react";
import { Box } from "@mui/material";
import { sectionStyles } from "./Section.styles";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <Box id={id} component="section" sx={sectionStyles}>
      {children}
    </Box>
  );
}
