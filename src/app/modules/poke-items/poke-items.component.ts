import { Component, OnInit } from '@angular/core';
import { PokemonItemData } from 'src/app/core/constants/interfaces/poke-item';
import { PokeItemService } from 'src/app/core/services/poke-item.service';

@Component({
  selector: 'app-poke-items',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.scss'],
})
export class PokeItemsComponent implements OnInit {
  pokeItemList: PokemonItemData[] = [];

  constructor(private pokeItemService: PokeItemService) {}

  ngOnInit(): void {
    this.pokeItemService.getPokemonItemList().subscribe((data) => {
      this.pokeItemList = data;
    });
  }
}
