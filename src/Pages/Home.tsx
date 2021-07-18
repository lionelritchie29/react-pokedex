/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { useQuery } from '@apollo/client'
import React from 'react'
import Pokemon from '../models/pokemon'
import { GET_ALL_POKEMONS } from '../queries/queries'
import tw from 'twin.macro'
import PokemonCard from '../Components/PokemonCard'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'
import { useEffect } from 'react'

const GridContainer = tw.div`grid grid-cols-2 gap-2` 
const Heading = tw.h1`text-xl text-white mb-2`

const Home = () => {
  const {loading, error, data} = useQuery(GET_ALL_POKEMONS)
  const [fetchedPokemons, setFetchedPokemons] = useState<Pokemon[]>([])
  const [displayPokemons, setDisplayPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (data != null) {
      setDisplayPokemons(data.pokemons.results)
      setFetchedPokemons(data.pokemons.results)
    }
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <React.Fragment>
        <Heading>All Pokemons</Heading>

        <SearchBar setPokemons={setDisplayPokemons} currentPokemons={fetchedPokemons}></SearchBar>

        <GridContainer tw='mt-4'>
        {displayPokemons.map(poke => {
          return (
            <PokemonCard key={poke.id} pokemon={poke} isInFavoritePage={false} refreshPokemonList={null}/>
          )
        })}
        </GridContainer>
    </React.Fragment>
  )
}

export default Home
