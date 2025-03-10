import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokeCardDetailComponent } from '../poke-card-detail/poke-card-detail.component';
import { PokemonData } from 'src/app/core/constants/interfaces/pokemon';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'poke-card-item',
  templateUrl: './poke-card-item.component.html',
  styleUrls: ['./poke-card-item.component.scss'],
})
export class PokeCardItemComponent implements OnInit {
  @Input() pokemonData: PokemonData;
  constructor(
    private _bottomSheet: MatBottomSheet,
    private utilService: UtilsService
  ) {
    this.pokemonData = {
      id: 0,
      flavor_text: '',
      image: '',
      types: [],
      name: '',
      weight: 0,
      height: 0,
      abilities: [],
      stats: [],
      evolution_chain_url: '',
    };
  }

  ngOnInit(): void {}

  view() {
    this._bottomSheet.open(PokeCardDetailComponent, {
      panelClass: 'poke-detail-bottom-sheet',
      data: this.pokemonData,
    });
  }

  /**
   * NOTE: For some reason, pokeapi returns unnecessary characters in the description. This function will clean it.
   */
  get description(): string {
    return this.utilService.cleanString(this.pokemonData.flavor_text);
  }

  get id(): string {
    return this.utilService.paddingNum(this.pokemonData.id);
  }

  getPokeTypeColor(type: string) {
    return this.utilService.getColorByPokeType(type);
  }
}
