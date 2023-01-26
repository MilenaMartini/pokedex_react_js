import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme } from '@mui/material/styles';

export default function PokemonCard({ name, image, types }) {

  const typeHandler = () => {
      if(types[1]){
        return types[0].type.name+" | "+types[1].type.name;
      }
      return types[0].type.name;
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" xs={1} image={image} alt="pokemon"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions >
      <Button size="small" color='inherit' variant='outlined'><DeleteIcon /></Button>
      <Button size="small" color="inherit" variant='outlined'><EditIcon /></Button>
      </CardActions>
    </Card>
  );
}
