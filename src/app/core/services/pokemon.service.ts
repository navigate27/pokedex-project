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
  api = `${environment.apiUrl}/pokemon?limit=10`;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonData[]> {
    return this.http.get<{ results: PokemonBase[] }>(this.api).pipe(
      mergeMap((response) => {
        const pokemonRequests = response.results.map((pokemon) =>
          this.getPokemonWithDetails(pokemon.url)
        );

        return forkJoin(pokemonRequests);
      })
    );
  }

  private getPokemonWithDetails(
    url: string
  ): Observable<PokemonData> {
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
            image: details.sprites.front_default,
            flavor_text: speciesDetails.flavor_text,
          }))
        );
      }),
      shareReplay(1)
    );
  }

  private getPokemonSpecies(url: string): Observable<PokemonSpeciesDetails> {
    return this.http.get<any>(url).pipe(
      map((speciesDetails) => ({
        flavor_text:
          speciesDetails.flavor_text_entries.find(
            (entry: any) => entry.language.name === 'en'
          )?.flavor_text || 'No description available',
      })),
      shareReplay(1)
    );
  }
}
