import React from 'react';
import './App.css';
import {useQuery} from '@apollo/client'
import { GET_ALL_POKEMONS } from './queries/queries'
import Pokemon from './models/pokemon'

function App() {
  const {loading, error, data} = useQuery(GET_ALL_POKEMONS)
  let pokemons: Pokemon[] = []

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  pokemons = data.pokemons.results;

  return (
    <div className="App">
      {pokemons.map(pokemon => {
        return (
          <div key={pokemon.id}>{pokemon.name}</div>
        )
      })}
    </div>
  );
}

export default App;
