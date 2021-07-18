import Pokemon from "../pokemon";

type SearchBarProps = {
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
  currentPokemons: Pokemon[]
}

export default SearchBarProps;