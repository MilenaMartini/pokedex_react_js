import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoPk from '../../pages/Pg_Pokedex/Pg_infor_extras';
export default function PokemonCard({ id, name, image, types }) {

  const typeHandler = () => {
      if(types[1]){
        return types[0].type.name+"|"+types[1].type.name;
      }
      return types[0].type.name;
  };

  <BrowserRouter>
  <Routes>
    <Route path="/pokemon" element={<InfoPk/>} />
  </Routes>
  </BrowserRouter>

const info = async (event) => {
  try {
    window.open('pokedex', '_self')
    }
  catch(err){
    alert('Algo deu errado :c' + err)
  }
 }

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
      <CardActions >
      <Button size="small" color='inherit' variant='outlined'><DeleteIcon /></Button>
      <Button size="small" color="inherit" variant='outlined' onClick={info}><EditIcon /></Button>
      </CardActions>
    </Card>
  );
}
