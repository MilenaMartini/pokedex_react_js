import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PokemonCard from '../../Components/PokemonCard/Pk_Card'
import { Style } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export const Pg_Poke = () => {
  const [pokemons, setPokemons] = useState([])
    useEffect(() => {
      getPokemons()
    }, []);

    const getPokemons = () => {
      var endpoints = []
      for( var i = 1; i<50; i++){
        // 152
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    return (
    <div >
      <Navbar />
      <Container maxWidth="false" sx={{background:"grey"}}>
       <Grid container spacing={2} colorspa  >
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
          </Grid>
          ))}

        </Grid>
      </Container>
    </div>
   );
}

export default Pg_Poke;
//Pg_Poke ou Poke
//caso de problema