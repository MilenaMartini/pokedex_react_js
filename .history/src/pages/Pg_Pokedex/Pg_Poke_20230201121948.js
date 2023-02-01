import { Grid, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PokemonCard from '../../Components/PokemonCard/Pk_Card'
import { Skeletons } from '../../Components/Skeletons/Skeletons';

export const Pg_Poke = () => {
  const [pokemons, setPokemons] = useState([])
    useEffect(() => {
      getPokemons()
    }, []);

    const getPokemons = () => {
      var endpoints = []
      for( var i = 1; i<157; i++){
        // 152
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
     axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokemonFilter = (name) => {
      var filteredPokemons = [];
      if (name === "") {
        getPokemons();
      }
      for (var i in pokemons) {
        if(pokemons[i].data.name.includes(name)) {
          filteredPokemons.push(pokemons[i]);
        } else {
          <p>Pokemon não encontrado</p>
        }
      }
      setPokemons(filteredPokemons);
    }

    return (
    <div >
      <Navbar pokemonFilter={pokemonFilter}/>
      <Container maxWidth="false" >
       <Grid container spacing={2} colorspa  >
          {pokemons.length === 0 ? <Skeletons/> :
          pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
            <PokemonCard id={pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
          </Grid>
          ))
          }

        </Grid>
      </Container>
    </div>
   );
}

export default Pg_Poke;
//Pg_Poke ou Poke
//caso de problema