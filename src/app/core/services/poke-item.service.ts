import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  PokemonItemBase,
  PokemonItemData,
} from '../constants/interfaces/poke-item';

@Injectable({
  providedIn: 'root',
})
export class PokeItemService {
  api = `${environment.apiUrl}/item`;

  constructor(private http: HttpClient) {}

  /**
   * Get specific pokemon item via id
   * @param {number} id:number
   * @returns {any}
   */
  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  /**
   * Get list of pokemon
   * @returns {PokemonItemData[]}
   */
  getPokemonItemList(offset: number): Observable<PokemonItemData[]> {
    return this.http
      .get<{ results: PokemonItemBase[] }>(`${this.api}/?limit=20&offset=${offset}`)
      .pipe(
        mergeMap((response) => {
          const pokemonRequests = response.results.map((pokemon) =>
            this.getPokemonItemWithDetails(pokemon.url)
          );

          return forkJoin(pokemonRequests);
        })
      );
  }

  /**
   * Invoked by getPokemonItemList()
   * Process the data fetched from the prop url from getPokemonItemList()
   * @param {string} url:string
   * @returns {PokemonItemData}
   */
  private getPokemonItemWithDetails(url: string): Observable<PokemonItemData> {
    return this.http.get<any>(url).pipe(
      map((details) => ({
        id: details.id,
        name:
          details.names.find((n: any) => n.language.name === 'en')
            ?.name || 'No name available',
        image: details.sprites.default,
        effect: details.effect_entries[0].effect,
        cost: details.cost,
        flavor_text:
          details.flavor_text_entries.find(
            (entry: any) => entry.language.name === 'en'
          )?.text || 'No description available',
        attributes: details.attributes.map((a: any) => a.name),
      })),
      shareReplay(1) //to prevent redundant api call
    );
  }
}
