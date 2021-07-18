import Sprites from './sprites'
import Abilities from './abilities'
import Species from './species'
import Stats from './stats'

interface Pokemon {
  id: number;
  name: string;
  image: string;
  sprites: Sprites;
  abilities: Abilities[];
  height: number;
  species: Species;
  weight: number;
  stats: Stats[];
}

export default Pokemon;