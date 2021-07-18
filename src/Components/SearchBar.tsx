/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import { useState } from 'react'
import tw from 'twin.macro'
import Pokemon from '../models/pokemon'
import SearchBarProps from '../models/type/search-bar-props'

const SearchBarContainer = tw.div`flex`
const SearchInput = tw.input`w-full rounded px-3 py-2 mr-1 outline-none`

const SearchBar = ({setPokemons, currentPokemons}: SearchBarProps) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('')

  const handleInputChange = (event: any) => {
    setSearchInputValue(event.target.value)
    onSearch()
  }

  const onSearch = () => {
    const filtered: Pokemon[] = currentPokemons.filter(p => p.name.toLowerCase().includes(searchInputValue.toLowerCase()))
    setPokemons(filtered)
  }

  return (
    <SearchBarContainer>
      <SearchInput type="text" value={searchInputValue} onChange={handleInputChange} placeholder="Search ..."/>
    </SearchBarContainer>
  )
}

export default SearchBar
