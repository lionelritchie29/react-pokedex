/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import PokemonCardProps from '../models/type/pokemon-card-props'
import capitalizeLetter from '../utils/capitalize-first-letter'
import { removeFavoritePokemon } from '../utils/favorite-pokemon-utils'
import {Card} from '../Components/StyledComponents'

const Title = tw.h4`text-center mt-2 font-semibold`
const DeleteFromFavoriteBtn = tw.button`bg-red-700 hover:bg-red-600 text-white px-3 py-2 rounded w-full mt-3`

const PokemonCard = ({pokemon, isInFavoritePage, refreshPokemonList}: PokemonCardProps) => {
  const imgSrc: string = isInFavoritePage ? pokemon.sprites.front_default : pokemon.image;

  const onRemoveFromFavorite = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    removeFavoritePokemon(pokemon)

    if (refreshPokemonList != null) {
      refreshPokemonList(pokemon)
    }

  }

  return (
    <Link to={`/${pokemon.name}`}>
      <Card>
      <img width="100" height="100" loading="lazy" tw='mx-auto' src={imgSrc} alt={pokemon.name} />
      <Title>{capitalizeLetter(pokemon.name)}</Title>
      
      { isInFavoritePage && 
        <DeleteFromFavoriteBtn onClick={onRemoveFromFavorite}>
          Remove
        </DeleteFromFavoriteBtn> }

    </Card>
    </Link>
  )
}

export default PokemonCard
