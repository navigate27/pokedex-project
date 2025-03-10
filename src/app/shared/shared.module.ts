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
import { SearchItemPipe } from './pipes/search-item.pipe';
import { PokeTypeColorDirective } from './directives/poke-type-color.directive';
import { PokeTypeColorComponent } from './components/poke-type-color/poke-type-color.component';

@NgModule({
  declarations: [
    PokeTypeColorDirective,
    PokemonCardDetailComponent,
    PokemonCardComponent,
    CarouselTabsComponent,
    CarouselTabContentDirective,
    PokeItemCardComponent,
    PokeItemCardDetailComponent,
    SearchItemPipe,
    PokeTypeColorComponent,
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
  exports: [
    PokeTypeColorDirective,
    PokemonCardComponent,
    CarouselTabsComponent,
    PokeItemCardComponent,
    SearchItemPipe,
  ],
})
export class SharedModule {}
