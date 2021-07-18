import React, { useState } from 'react'
import Pokemon from '../models/pokemon'
import PokemonCard from '../Components/PokemonCard'
import { retrieveFavoritePokemons } from '../utils/favorite-pokemon-utils'
import tw from 'twin.macro'

const Heading = tw.h1`text-xl text-white mb-2`
const GridContainer = tw.div`grid grid-cols-2 gap-2`

const Favorites = () => {
  const [pokemons, setPokemons] = useState(retrieveFavoritePokemons())
  
  const refreshPokemonList = (pokemon: Pokemon) => {
    const index: number = pokemons.findIndex(p => p.name === pokemon.name)
    pokemons.splice(index, 1)
    setPokemons(pokemons)
    window.location.reload();
  }
  
  return (
    <React.Fragment>
        <Heading>My Favorites</Heading>

        <GridContainer>
        {pokemons.map(poke => {
          return (
            <PokemonCard key={poke.id} pokemon={poke} isInFavoritePage={true} refreshPokemonList={refreshPokemonList}/>
          )
        })}
        </GridContainer>
    </React.Fragment>
  )
}

export default Favorites
