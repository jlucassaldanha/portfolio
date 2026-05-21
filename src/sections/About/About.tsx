import { titleStyles } from "@/styles/shared.styles";
import { Box, Typography } from "@mui/material";
import { boxBodyLayoutStyles, boxContentLayoutStyles, textStyles } from "./About.styles";

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
