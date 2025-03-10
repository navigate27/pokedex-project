import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue = '';
  pokemonList: any[] = [];
  offsetList = 0;
  @ViewChild('endOfList', { static: false }) endOfList!: ElementRef;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.pokemonService.getPokemonList(this.offsetList).subscribe((data) => {
      this.pokemonList = [...this.pokemonList, ...data];
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.pokemonList.length == 0) {
          return;
        }

        this.loadMoreItems();
      }
    });

    observer.observe(this.endOfList.nativeElement);
  }

  loadMoreItems() {
    this.offsetList += 10;
    this.loadData();
  }
}
