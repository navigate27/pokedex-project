import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeTypeColorDirective } from './poke-type-color.directive';

@NgModule({
  declarations: [PokeTypeColorDirective],
  imports: [CommonModule],
  exports: [PokeTypeColorDirective],
})
export class DirectivesModule {}
