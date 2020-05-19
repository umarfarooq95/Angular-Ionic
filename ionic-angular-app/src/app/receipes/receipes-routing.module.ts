import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipesPage } from './receipes.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipesPageRoutingModule {}
