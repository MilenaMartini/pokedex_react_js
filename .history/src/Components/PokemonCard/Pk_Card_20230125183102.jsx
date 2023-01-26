import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          caso precise de algum texto
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Excluir</Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  );
}