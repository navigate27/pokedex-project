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
import { MatTabsModule } from '@angular/material/tabs';
import { PokeCardItemComponent } from './components/poke-card-item/poke-card-item.component';
import { CarouselTabsComponent } from './components/carousel-tabs/carousel-tabs.component';
import { CarouselTabContentDirective } from './directives/carousel-tab-content.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PokeTypeColorDirective } from './directives/poke-type-color.directive';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    PokeCardDetailComponent,
    PokeCardItemComponent,
    CarouselTabsComponent,
    CarouselTabContentDirective,
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
    DirectivesModule
  ],
  exports: [
    PokeCardItemComponent,
    CarouselTabsComponent,
  ],
})
export class SharedModule {}
