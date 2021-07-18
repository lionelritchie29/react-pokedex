import React from 'react'
import Pokemon from '../models/pokemon'
import PokemonCard from '../Components/PokemonCard'
import { retrieveFavoritePokemons } from '../utils/favorite-pokemon-utils'
import tw from 'twin.macro'

const Heading = tw.h1`text-xl text-white mb-2`
const GridContainer = tw.div`grid grid-cols-2 gap-2`

const Favorites = () => {
  const pokemons: Pokemon[] = retrieveFavoritePokemons()
  console.log(pokemons);
  
  return (
    <React.Fragment>
        <Heading>My Favorites</Heading>

        <GridContainer>
        {pokemons.map(poke => {
          return (
            <PokemonCard key={poke.id} pokemon={poke} isInFavoritePage={true}/>
          )
        })}
        </GridContainer>
    </React.Fragment>
  )
}

export default Favorites
