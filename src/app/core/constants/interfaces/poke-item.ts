export interface PokemonItemBase {
  name: string;
  url: string;
}

export interface PokemonItemData {
  id: number;
  name: string;
  image: string;
  effect: string;
  cost: number;
  flavor_text: string;
  attributes: string[];
}
