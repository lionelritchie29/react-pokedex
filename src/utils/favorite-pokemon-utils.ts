import Pokemon from "../models/pokemon";

const KEY = 'favorite_pokemon'

const addFavoritePokemon = (pokemon: Pokemon) => {
  const pokemons: Pokemon[] = retrieveFavoritePokemons();

  if (pokemons.length === 0 || !isInFavorite(pokemon, pokemons)) {
    pokemons.push(pokemon)
    localStorage.setItem(KEY, JSON.stringify(pokemons))
  }
}

const retrieveFavoritePokemons = () : Pokemon[] => {
  const pokemons: Pokemon[] = JSON.parse(localStorage.getItem(KEY))
  return pokemons === null ? [] : pokemons
}

const isInFavorite = (pokemon: Pokemon, pokemonList: Pokemon[] = []) : boolean => {
  const pokemons: Pokemon[] = pokemonList.length > 0 ? pokemonList : retrieveFavoritePokemons()
  return pokemons.some(p => p.name === pokemon.name)
} 

const removeFavoritePokemon = (pokemon: Pokemon) => {
  const pokemons: Pokemon[] = retrieveFavoritePokemons()
  const isExist: boolean = pokemons.some(p => p.name ===  pokemon.name)

  if (isExist) {
    const index: number = pokemons.findIndex(p => p.name === pokemon.name)
    pokemons.splice(index, 1)
    localStorage.setItem(KEY, JSON.stringify(pokemons))
  }
}

export {addFavoritePokemon, retrieveFavoritePokemons, isInFavorite, removeFavoritePokemon}