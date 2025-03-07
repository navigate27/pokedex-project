import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardDetailComponent } from './components/poke-card-detail/poke-card-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PokeCardItemComponent } from './components/poke-card-item/poke-card-small.component';

@NgModule({
  declarations: [PokeCardDetailComponent, PokeCardItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  exports: [PokeCardItemComponent],
})
export class SharedModule {}
