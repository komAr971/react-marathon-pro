export interface IPokemons {
  total: number;
  pokemons: PokemonsRequest[];
}

export type PokemonTypes =
  | 'stile'
  | 'dark'
  | 'rock'
  | 'grass'
  | 'bug'
  | 'ice'
  | 'water'
  | 'fire'
  | 'fighting'
  | 'dragon'
  | 'normal'
  | 'gosth'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'ghost'
  | 'ground'
  | 'electric';

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface PokemonsRequest {
  name_clean: string;
  abilities: string[];
  stats: PokemonStats;
  types: PokemonTypes[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}
