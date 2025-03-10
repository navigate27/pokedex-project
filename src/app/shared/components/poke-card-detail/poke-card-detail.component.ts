import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonData } from 'src/app/core/constants/interfaces/pokemon';
import { UtilsService } from '../../services/utils.service';
import { BASE_STATS_ABBR } from 'src/app/core/constants/base-stats-abbr';

@Component({
  selector: 'app-poke-card-detail',
  templateUrl: './poke-card-detail.component.html',
  styleUrls: ['./poke-card-detail.component.scss'],
})
export class PokeCardDetailComponent implements OnInit {
  tabSelected = 0;
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public pokemonData: PokemonData,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    console.debug(this.pokemonData);
  }

  tabPrev() {
    if (this.tabSelected < 1) {
      return;
    }
    this.tabSelected -= 1;
  }

  tabNext() {
    if (this.tabSelected > 1) {
      return;
    }
    this.tabSelected += 1;
  }

  tabSelect(event: any) {}

  get id(): string {
    return this.utilService.paddingNum(this.pokemonData.id);
  }

  getPokeTypeColor(type: string) {
    return this.utilService.getColorByPokeType(type);
  }

  getStatValue(value: number) {
    return this.utilService.paddingNum(value);
  }

  getStatValueRange(value: number) {
    return (value / 200) * 100;
  }

  getStatAbbr(statName: string) {
    const abbrs = BASE_STATS_ABBR;
    return abbrs.find((x: any) => x.name == statName)?.abbr;
  }
}
