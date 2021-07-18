import {gql, DocumentNode} from '@apollo/client'

const GET_ALL_POKEMONS: DocumentNode = gql`
query {
  pokemons(limit: 50){
    results{
      id,
      name,
      url,
      artwork,
      image
    }
  }
}
`;

const GET_POKEMON_BY_NAME: DocumentNode = gql`
query GetPokemonByName($name:String!){
  pokemon (name: $name) {
    id
    name,
    sprites{
      front_default,
      back_default,
    },
    abilities{
      ability {
        name,
      }
    },
    height,
    species{
      name
    },
    weight,
    stats {
      stat {
        name
      }
      base_stat
    }
  }
}
`

export { GET_ALL_POKEMONS, GET_POKEMON_BY_NAME };