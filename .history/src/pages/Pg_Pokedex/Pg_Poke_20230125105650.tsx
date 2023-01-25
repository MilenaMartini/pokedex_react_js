import React from "react";
import {useState} from "react";
import {useRecoilState} from "recoil";

const Poke = () => {
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);

  return <div> Teste </div>

};

export default Poke;