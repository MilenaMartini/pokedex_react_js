import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function PokemonCard({ id, name, image, types }) {

  const typeHandler = () => {
      if(types[1]){
        return types[0].type.name+"|"+types[1].type.name;
      }
      return types[0].type.name;
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" xs={1} image={image} alt="pokemon"/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {id} - {name}
        </Typography>
        <Typography gutterBottom component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
    </Card>
  );
}
