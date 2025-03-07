import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FabMenuComponent } from '../components/fab-menu/fab-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { FabMenuContentsComponent } from './fab-menu/fab-menu-contents/fab-menu-contents.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FabMenuComponent, FabMenuContentsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    OverlayModule,
    MatIconModule,
  ],
  exports: [FabMenuComponent],
})
export class CoreComponentsModule {}
