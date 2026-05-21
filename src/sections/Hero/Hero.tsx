import {
  boxButtonLayoutStyles,
  buttonStyles,
  textStyles,
  titleStyles,
} from "@/styles/shared.styles";
import { Avatar, Box, Button, Typography } from "@mui/material";
import {
  boxBodyLayoutStyles,
  boxContentLayoutStyles,
  boxTitleLayoutStyles,
  mainHeroBoxStyles,
  responsiveNeonStyles,
} from "./Hero.styles";

export default function Hero() {
  return (
    <Box sx={mainHeroBoxStyles}>
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
            <Button sx={buttonStyles} variant="contained" href="#contato">
              Entrar em contato
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
