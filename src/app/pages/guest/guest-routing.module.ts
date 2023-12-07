import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesWebFiltersComponent } from './movies-web-filters/movies-web-filters.component';

const routes: Routes = [{ path: 'webpage', component: MoviesWebFiltersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
