import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { CoreComponentsModule } from '../components/core-components.module';


@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [CommonModule, CoreComponentsModule],
  exports: [BaseLayoutComponent],
})
export class LayoutsModule {}
