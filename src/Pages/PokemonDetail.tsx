/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import UrlParams from '../models/type/url-params'
import tw from 'twin.macro'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_BY_NAME } from '../queries/queries'
import Pokemon from '../models/pokemon'
import capitalizeLetter from '../utils/capitalize-first-letter'
import {addFavoritePokemon, isInFavorite, removeFavoritePokemon} from '../utils/favorite-pokemon-utils'
import { useEffect } from 'react'
import {Card} from '../Components/StyledComponents'

const TwoColsGrid = tw.div`grid grid-cols-2 gap-2`

const Heading = tw.h1`text-xl text-white mb-2`
const SubHeading = tw.h3`ml-1 text-gray-200`
const Divider = tw.div`mt-8 border border-gray-600`
const AddFavoriteBtn = tw.button`bg-pink-700 text-white rounded py-2 px-3 mt-2 w-full hover:bg-pink-600`
const RemoveFavoriteBtn = tw.button`bg-red-700 text-white rounded py-2 px-3 mt-2 w-full hover:bg-pink-600`

const PokemonDetail = () => {
  const {name} = useParams<UrlParams>()
  const [isFavorited, setIsFavorited] = useState(false)
  const [pokemon, setPokemon] = useState<Pokemon>(null)
  const {loading, error, data} = useQuery(GET_POKEMON_BY_NAME, {variables: {name}})

  useEffect(() => {
    if (data) {
      const p: Pokemon = data.pokemon
      setPokemon(p)
      setIsFavorited(isInFavorite(p))
    }
  }, [data])

  const onAddFavorite = () => {
    if (pokemon) {
      addFavoritePokemon(pokemon)
      setIsFavorited(true)
    }
  }

  const onRemoveFavorite = () => {
    if (pokemon) {
      removeFavoritePokemon(pokemon)
      setIsFavorited(false)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  
  return (
    pokemon != null && 
    <section>
      <Heading>{capitalizeLetter(pokemon.name)}</Heading>
      <TwoColsGrid>
        <Card>
          <img tw='mx-auto' src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Card>

        <Card>
          <img tw='mx-auto' src={pokemon.sprites.back_default} alt={pokemon.name} />
        </Card>
      </TwoColsGrid>

      {
        isFavorited ?
          <RemoveFavoriteBtn onClick={onRemoveFavorite}>
            Remove from Favorite
          </RemoveFavoriteBtn> :
          <AddFavoriteBtn onClick={onAddFavorite}>
            Add to Favorite
          </AddFavoriteBtn>
      }
      

      <Divider />
      
      <div>
        <div tw='mt-4'>
          <SubHeading>Species</SubHeading>
          <Card>
            <p>{capitalizeLetter(pokemon.species.name)}</p>
          </Card>
        </div>

        <div tw='mt-4'>
          <SubHeading>Height</SubHeading>
          <Card>
            <p>{pokemon.height}</p>
          </Card>
        </div>

        <div tw='mt-4'>
          <SubHeading>Weight</SubHeading>
          <Card>
            <p>{pokemon.weight}</p>
          </Card>
        </div>
      </div>

      <Divider />

      <Heading tw='mt-4'>{`Abilities`}</Heading>
      <TwoColsGrid>
        {
          pokemon.abilities.map(ability => {
            return (
              <Card key={ability.ability.name}>
                {capitalizeLetter(ability.ability.name)}
              </Card>
            )
          })
        }
      </TwoColsGrid>

      <Divider />

      <Heading tw='mt-4'>{`Stats`}</Heading>
      {pokemon.stats.map(stat => {
        return (
          <div tw='mt-2' key={stat.stat.name}>
          <SubHeading>{capitalizeLetter(stat.stat.name)}</SubHeading>
          <Card>
            <p>{stat.base_stat}</p>
          </Card>
        </div>
        )
      })}

    </section>  
  )
}

export default PokemonDetail
