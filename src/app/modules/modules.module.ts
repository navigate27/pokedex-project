import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokeItemsComponent } from './poke-items/poke-items.component';

@NgModule({
  declarations: [HomeComponent, PokeItemsComponent],
  imports: [CommonModule, SharedModule, MatGridListModule],
})
export class ModulesModule {}
