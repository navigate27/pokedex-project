import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { PokeCardSmallComponent } from './poke-card-small/poke-card-small.component';

@NgModule({
  declarations: [HomeComponent, PokeCardSmallComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class ModulesModule {}
