import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./modules/poke-items/poke-items.module').then(
        (m) => m.PokeItemsModule
      ),
  },
  {
    path: 'error/404',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
