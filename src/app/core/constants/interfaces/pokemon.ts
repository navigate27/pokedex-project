export interface PokemonBase {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  types: string[];
  image: string;
  weight: number;
  height: number;
  abilities: string[];
  stats: PokemonBaseStats[];
}

export interface PokemonSpeciesDetails {
  flavor_text: string;
}

export interface PokemonBaseStats {
  name: string;
  stat: number;
}

export type PokemonData = PokemonDetails & PokemonSpeciesDetails;
