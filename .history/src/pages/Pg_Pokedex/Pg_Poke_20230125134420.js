import { Container } from '@mui/system';
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PokemonCard from '../../Components/PokemonCard/Pk_Card'

export const Pg_Poke = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <PokemonCard />
      </Container>
    </div>
   );
}

export default Pg_Poke;
//Pg_Poke ou Poke
//caso de problema