import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokeItemCardDetailComponent } from '../poke-item-card-detail/poke-item-card-detail.component';
import { PokemonItemData } from 'src/app/core/constants/interfaces/poke-item';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'poke-item-card',
  templateUrl: './poke-item-card.component.html',
  styleUrls: ['./poke-item-card.component.scss'],
})
export class PokeItemCardComponent implements OnInit {
  @Input() pokeItemData: PokemonItemData;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private utilService: UtilsService
  ) {
    this.pokeItemData = {
      attributes: [],
      cost: 0,
      effect: '',
      flavor_text: '',
      id: 0,
      image: '',
      name: '',
    };
  }

  ngOnInit(): void {}

  get id(): string {
    return this.utilService.paddingNum(this.pokeItemData.id, 4);
  }

  /**
   * TODO: View Poke Item Card Detail Component
   */
  view() {
    // this._bottomSheet.open(PokeItemCardDetailComponent, {
    //   panelClass: 'poke-item-card-detail-bs',
    // });
  }
}
