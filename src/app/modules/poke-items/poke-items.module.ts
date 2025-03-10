import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeItemsComponent } from './poke-items.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokeItemsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PokeItemsModule {}
