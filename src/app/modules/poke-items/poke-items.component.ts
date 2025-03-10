import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonItemData } from 'src/app/core/constants/interfaces/poke-item';
import { PokeItemService } from 'src/app/core/services/poke-item.service';

@Component({
  selector: 'app-poke-items',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.scss'],
})
export class PokeItemsComponent implements OnInit {
  searchValue = '';
  pokeItemList: PokemonItemData[] = [];
  offsetList = 0;
  @ViewChild('endOfList', { static: false }) endOfList!: ElementRef;

  constructor(private pokeItemService: PokeItemService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.pokeItemService.getPokemonItemList(this.offsetList).subscribe((data) => {
      this.pokeItemList = [...this.pokeItemList, ...data];
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.pokeItemList.length == 0) {
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
