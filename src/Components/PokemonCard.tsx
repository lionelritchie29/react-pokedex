/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import PokemonCardProps from '../models/type/pokemon-card-props'
import capitalizeLetter from '../utils/capitalize-first-letter'

const Card = tw.div`bg-gray-800 text-white p-3 rounded-md`
const Title = tw.h4`text-center mt-2 font-semibold`

const PokemonCard = ({pokemon, isInFavoritePage}: PokemonCardProps) => {
  const imgSrc: string = isInFavoritePage ? pokemon.sprites.front_default : pokemon.image;

  return (
    <Link to={`/${pokemon.name}`}>
      <Card>
      <img loading="lazy" tw='mx-auto' src={imgSrc} alt={pokemon.name} />
      <Title>{capitalizeLetter(pokemon.name)}</Title>
    </Card>
    </Link>
  )
}

export default PokemonCard
