import { Injectable } from '@angular/core';
import { PokemonType } from 'src/app/core/constants/enums/poke-type.enum';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  paddingNum(num: number | string, length?: number): string {
    return num.toString().padStart(length || 3, '0');
  }

  toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }

  getColorByPokeType(type: string) {
    return PokemonType[this.toTitleCase(type) as keyof typeof PokemonType];
  }
}
