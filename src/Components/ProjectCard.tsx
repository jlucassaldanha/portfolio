import { Card } from "@mui/material";

export default function ProjectCard() {
	return (
		<Card sx={cardStyles}>
            <CardHeader 
              title="Nome do Projeto" 
              action={<IconButton><ExpandMoreIcon sx={{color: "whitesmoke"}} /></IconButton>}  
            />
             <CardMedia 
                sx={cardImageStyles}
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
            </CardContent>
          </Card>
	)
}