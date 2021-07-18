/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Props from '../models/props'
import capitalizeLetter from '../utils/capitalize-first-letter'

const Card = tw.div`bg-gray-800 text-white p-3 rounded-md`
const Title = tw.h4`text-center mt-2 font-semibold`

const PokemonCard: React.FC<Props> = ({pokemon}: Props) => {
  return (
    <Link to={`/${pokemon.name}`}>
      <Card>
      <img tw='mx-auto' src={pokemon.image} alt={pokemon.name} />
      <Title>{capitalizeLetter(pokemon.name)}</Title>
    </Card>
    </Link>
  )
}

export default PokemonCard
