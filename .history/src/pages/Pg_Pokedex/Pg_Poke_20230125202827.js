import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PokemonCard from '../../Components/PokemonCard/Pk_Card'

export const Pg_Poke = () => {
  const [pokemons, setPokemons] = useState([])
    useEffect(() => {
      getPokemons()
    }, []);

    const getPokemons = () => {
      var endpoints = []
      for( var i = 1; i<152; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    return (
    <div>
      <Navbar />
      <Container maxWidth="false">
       <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
            <PokemonCard name={pokemon.data.name} />
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