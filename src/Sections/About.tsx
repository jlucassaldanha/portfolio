import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";

const neonColor = "#26a34c";

const titleStyles: SxProps<Theme> = {
  maxWidth: { xs: 300, lg: 450 },
  fontSize: { xs: 36, lg: 80 },
  fontWeight: "bolder",
  color: neonColor,
};

const textStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: { lg: "50%" } ,
  fontSize: { xs: 18, lg: 25 },
};

const boxContentLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row"},
  justifyContent: "center",
  alignItems: "start",
  maxWidth: { xs: 500, lg: 10000 },
  gap: 6
};

const boxBodyLayoutStyles: SxProps<Theme> = {
  display: "flex",
  pb: 15,
  px: { xs: 5, lg: 10 },
  flexDirection:  "column",
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: 5, lg: 8 },
};

export default function About() {
  return (
    <Box sx={boxBodyLayoutStyles}>
      <Box>
        <Typography sx={titleStyles} variant="h3">
          Sobre mim
        </Typography>
      </Box>
      <Box sx={boxContentLayoutStyles}>
        <Typography sx={textStyles} variant="body1">
          Minha experiência abrange o desenvolvimento frontend e backend. Possuo
          vivência prática na construção de interfaces com Next.js e React, e
          também no desenvolvimento de APIs em C# (ecossistema .NET) e Python
          (FastAPI/Flask).
        </Typography>
        <Typography sx={textStyles} variant="body1">
          Essa base técnica me proporciona uma visão completa do ciclo de vida
          do produto, permitindo a entrega de projetos integrados de ponta a
          ponta.
        </Typography>
      </Box>
    </Box>
  );
}
