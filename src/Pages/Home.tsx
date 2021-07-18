/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { useQuery } from '@apollo/client'
import React from 'react'
import Pokemon from '../models/pokemon'
import { GET_ALL_POKEMONS } from '../queries/queries'
import tw from 'twin.macro'
import PokemonCard from '../Components/PokemonCard'

const GridContainer = tw.div`grid grid-cols-2 gap-2` 
const Heading = tw.h1`text-xl text-white mb-2`

const Home = () => {
  const {loading, error, data} = useQuery(GET_ALL_POKEMONS)
  let pokemons: Pokemon[] = [];

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  pokemons = data.pokemons.results
  return (
    <React.Fragment>
        <Heading>All Pokemons</Heading>

        <GridContainer>
        {pokemons.map(poke => {
          return (
            <PokemonCard key={poke.id} pokemon={poke} />
          )
        })}
        </GridContainer>
    </React.Fragment>
  )
}

export default Home
