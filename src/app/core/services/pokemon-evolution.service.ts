import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  PokeEvolution,
  PokeEvolutionChain,
} from '../constants/interfaces/pokemon-evolution';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonEvolutionService {
  api = `${environment.apiUrl}/evolution-chain`;
  constructor(
    private http: HttpClient,
    private pokemonService: PokemonService
  ) {}

  /**
   * Process whole evolution chain and return the list of evolution of pokemon in order
   * @param {string} chainUrl:string
   * @returns {PokeEvolution[]}
   * NOTE: Using a promise approach to showcase different data fetching technique
   */
  async getEvolutionChain(chainUrl: string): Promise<PokeEvolution[]> {
    const evolutionChain: PokeEvolution[] = [];

    const response = await this.http.get<any>(chainUrl).toPromise();

    const chainDetails = response.chain;
    await this.addToChain(chainDetails, evolutionChain); // initial fetch chain process

    return evolutionChain;
  }

  /**
   * Recursive method to loop through the evo chain and get the images
   * @param {PokeEvolutionChain} details:PokeEvolutionChain
   * @param {PokeEvolution[]} evolutionChain:PokeEvolution[]
   * @returns {void}
   */
  private async addToChain(
    details: PokeEvolutionChain,
    evolutionChain: PokeEvolution[]
  ): Promise<void> {
    const name = details.species.name;

    // Image Fetch
    const image = await this.fetchPokemonImage(details.species.url);
    evolutionChain.push({ name, image });

    // Will get further evolution, if none, fetching will stop
    if (details.evolves_to && details.evolves_to.length > 0) {
      for (const evolve of details.evolves_to) {
        await this.addToChain(evolve, evolutionChain); // Continue to next evolution
      }
    }
  }

  /**
   * Method to get the poke image using url from poke-specicies
   * @param {string} speciesUrl:string
   * @returns {string}
   */
  private async fetchPokemonImage(speciesUrl: string): Promise<string> {
    try {
      const speciesResponse = await this.http.get<any>(speciesUrl).toPromise();
      const pokemonId = speciesResponse.id;
      const pokemonResponse = await this.pokemonService
        .get(pokemonId)
        .toPromise();
      return (
        pokemonResponse.sprites?.other?.['official-artwork']?.front_default ||
        ''
      );
    } catch (error) {
      console.error('Error fetching Pokémon image:', error);
      return '';
    }
  }
}
