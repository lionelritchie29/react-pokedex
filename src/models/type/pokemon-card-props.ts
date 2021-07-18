import React from "react";
import Pokemon from "../pokemon";

type PokemonCardProps = {
  pokemon: Pokemon,
  isInFavoritePage: boolean,
  refreshPokemonList: (Pokemon) => void
}

export default PokemonCardProps;