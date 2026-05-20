import {
  Avatar,
  Box,
  Button,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

const neonColor = "#26a34c";

const responsiveNeonStyles: SxProps<Theme> = {
  width: { xs: 120, lg: 350 },
  height: { xs: 120, lg: 350 },
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

const boxBodyLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: 5, lg: 8 },
};

const boxTitleLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  minWidth: { sx: "100vw", lg: "50vw" },
  px: 3,
  py: 2,
  maxWidth: { sx: 300 },
  gap: { xs: 2, lg: 8 },
};

const boxContentLayoutStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: { xs: 300, lg: 450 },
  mt: { lg: 15 },
  gap: 1,
};

const boxButtonLayoutStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  my: { xs: 5, lg: 10 },
  gap: 4,
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

const titleStyles: SxProps<Theme> = {
  maxWidth: { xs: 300, lg: 450 },
  fontSize: { xs: 36, lg: 80 },
  fontWeight: "bolder",
  color: neonColor,
};

const textStyles: SxProps<Theme> = {
  fontSize: { xs: 18, lg: 25 },
};

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={boxBodyLayoutStyles}>
        <Box sx={boxTitleLayoutStyles}>
          <Typography sx={titleStyles} variant="h3">
            Olá, me chamo João
          </Typography>
          <Avatar sx={responsiveNeonStyles} src="/profile.jpg" />
        </Box>
        <Box sx={boxContentLayoutStyles}>
          <Typography sx={textStyles} variant="body1">
            Desenvolvedor de software apaixonado por criar soluções e resolver
            problemas do mundo real.
          </Typography>
          <Typography sx={textStyles} variant="body1">
            Aqui vocês vão poder encontrar mais sobre meus projetos!
          </Typography>
          <Box sx={boxButtonLayoutStyles}>
            <Button sx={buttonStyles} variant="contained" href="#contato" >Entrar em contato</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
