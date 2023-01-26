import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import icon from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" xs={1} image={image} alt="pokemon"/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          caso precise de algum texto
        </Typography> */}
      </CardContent>
      <CardActions>
      <Button variant="outlined" startIcon={<icon />}>
      </Button>
      <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  );
}