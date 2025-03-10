import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue = '';
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = data;
    });
  }
}
