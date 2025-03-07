import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesModule } from './modules/modules.module';
import { LayoutsModule } from './core/layouts/layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
