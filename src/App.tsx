/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react';
import './App.css';
import {useQuery} from '@apollo/client'
import { GET_ALL_POKEMONS } from './queries/queries'
import Pokemon from './models/pokemon'
import tw from 'twin.macro'


const TestHeading = tw.h1`text-blue-500 text-xl hover:text-red-500`

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
          <TestHeading key={pokemon.id}>{pokemon.name}</TestHeading>
        )
      })}
    </div>
  );
}

export default App;
