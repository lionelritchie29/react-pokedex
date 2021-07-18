/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import 'twin.macro'
import { useQuery } from '@apollo/client'
import React from 'react'
import Pokemon from '../models/pokemon'
import { GET_ALL_POKEMONS } from '../queries/queries'
import PokemonCard from '../Components/PokemonCard'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Components/Loading'
import ErrorCard from '../Components/ErrorCard'
import { GridContainer, Heading } from '../Components/StyledComponents'


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

  if (loading) return <Loading />
  if (error) return <ErrorCard />

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
