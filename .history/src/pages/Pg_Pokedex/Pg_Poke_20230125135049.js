import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PokemonCard from '../../Components/PokemonCard/Pk_Card'

export const Pg_Poke = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
       <Grid container>

          <Grid item xs={3} >
            <PokemonCard />
          </Grid>
          <Grid item xs={3} >
            <PokemonCard />
          </Grid>
          <Grid item xs={3} >
            <PokemonCard />
          </Grid>

        </Grid>
      </Container>
    </div>
   );
}

export default Pg_Poke;
//Pg_Poke ou Poke
//caso de problema