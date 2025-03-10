import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PokemonData,
  PokemonBase,
  PokemonSpeciesDetails,
} from '../constants/interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  api = `${environment.apiUrl}/pokemon`;

  constructor(private http: HttpClient) {}

  /**
   * Get specific pokemon details via id
   * @param {number} id:number
   * @returns {any}
   * Note: Using observables approach to showcase different data fetching technique
   */
  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  /**
   * Get list of pokemon
   * @returns {PokemonData[]}
   */
  getPokemonList(): Observable<PokemonData[]> {
    return this.http
      .get<{ results: PokemonBase[] }>(`${this.api}/?limit=10`)
      .pipe(
        mergeMap((response) => {
          const pokemonRequests = response.results.map((pokemon) =>
            this.getPokemonWithDetails(pokemon.url)
          );

          return forkJoin(pokemonRequests);
        })
      );
  }

  /**
   * Invoked by getPokemonList()
   * Process the data fetched from the prop url from getPokemonList()
   * @param {string} url:string
   * @returns {PokemonData}
   */
  private getPokemonWithDetails(url: string): Observable<PokemonData> {
    return this.http.get<any>(url).pipe(
      mergeMap((details) => {
        const speciesUrl = details.species.url;

        return this.getPokemonSpecies(speciesUrl).pipe(
          map((speciesDetails) => ({
            id: details.id,
            name: details.name,
            weight: details.weight,
            height: details.height,
            types: details.types.map((t: any) => t.type.name),
            abilities: details.abilities.map((a: any) => a.ability.name),
            stats: details.stats.map((s: any) => {
              return {
                stat: s.base_stat,
                name: s.stat.name,
              };
            }),
            image: details.sprites.other['official-artwork'].front_default,
            flavor_text: speciesDetails.flavor_text,
            evolution_chain_url: speciesDetails.evolution_chain_url,
          }))
        );
      }),
      shareReplay(1) //to prevent redundant api call
    );
  }

  /**
   * Invoked by getPokemonWithDetails()
   * Process the data fetched from the prop url from getPokemonWithDetails()
   * @param {string} url:string
   * @returns {PokemonSpeciesDetails}
   */
  private getPokemonSpecies(url: string): Observable<PokemonSpeciesDetails> {
    return this.http.get<any>(url).pipe(
      map((speciesDetails) => ({
        evolution_chain_url: speciesDetails.evolution_chain.url,
        flavor_text:
          speciesDetails.flavor_text_entries.find(
            (entry: any) => entry.language.name === 'en'
          )?.flavor_text || 'No description available',
      })),
      shareReplay(1)
    );
  }
}
