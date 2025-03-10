export interface PokeEvolutionChain {
  species: { name: string; url: string };
  evolves_to?: PokeEvolutionChain[];
}

export interface PokeEvolution {
  name: string;
  image: string;
}
