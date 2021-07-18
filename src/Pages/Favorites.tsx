import React, { useState } from 'react'
import Pokemon from '../models/pokemon'
import PokemonCard from '../Components/PokemonCard'
import { retrieveFavoritePokemons } from '../utils/favorite-pokemon-utils'
import 'twin.macro'
import { Card, GridContainer, Heading } from '../Components/StyledComponents'

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

        {pokemons.length === 0 &&
          <div>
            <Card>
            There is no favorited pokemon yet
          </Card>
          </div>
        }

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
