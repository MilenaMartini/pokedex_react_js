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
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
    };

    return (
    <div>
      <Navbar />
      <Container maxWidth="false">
       <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
            <PokemonCard name={pokemon.name} />
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