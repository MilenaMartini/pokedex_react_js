import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
      <Button size="small" xs={1}><DeleteIcon /></Button>
      <Button size="small" xs={1}><EditIcon /></Button>
      </CardActions>
    </Card>
  );
}