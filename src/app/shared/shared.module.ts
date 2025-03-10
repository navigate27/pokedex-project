import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDetailComponent } from './components/pokemon-card-detail/pokemon-card-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CarouselTabsComponent } from './components/carousel-tabs/carousel-tabs.component';
import { CarouselTabContentDirective } from './directives/carousel-tab-content.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PokeItemCardComponent } from './components/poke-item-card/poke-item-card.component';
import { PokeItemCardDetailComponent } from './components/poke-item-card-detail/poke-item-card-detail.component';

@NgModule({
  declarations: [
    PokemonCardDetailComponent,
    PokemonCardComponent,
    CarouselTabsComponent,
    CarouselTabContentDirective,
    PokeItemCardComponent,
    PokeItemCardDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatProgressBarModule,
  ],
  exports: [PokemonCardComponent, CarouselTabsComponent, PokeItemCardComponent],
})
export class SharedModule {}
