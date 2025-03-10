import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokeItemsComponent } from './poke-items/poke-items.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, PokeItemsComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, SharedModule, MatGridListModule],
})
export class ModulesModule {}
