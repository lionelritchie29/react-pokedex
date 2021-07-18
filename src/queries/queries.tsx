import {gql, DocumentNode} from '@apollo/client'

const GET_ALL_POKEMONS: DocumentNode = gql`
  query {
    pokemons{
      results{
        id,
        name,
        artwork,
      }
    }
  }
`;

export { GET_ALL_POKEMONS };