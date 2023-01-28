import React, {
  useEffect,
  useState,
  useContext
} from 'react';
import { useParams } from 'react-router-dom';
import './View.css';

const PokemonView = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }
}